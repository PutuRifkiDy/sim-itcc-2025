<?php
namespace App\Http\Controllers;

use App\Enums\PaymentStatus;
use App\Enums\SubmissionStatus;
use App\Http\Requests\PaymentStoreRequest;
use App\Http\Requests\SubmissionStoreRequest;
use App\Http\Requests\TeamRegisterRequest;
use App\Http\Resources\CompetitionRegistrationResource;
use App\Http\Resources\PaymentMethodsResource;
use App\Models\CompetitionPrices;
use App\Models\CompetitionRegistrations;
use App\Models\Competitions;
use App\Models\PaymentMethods;
use App\Models\Submissions;
use App\Models\TeamMembers;
use App\Models\Teams;
use App\Traits\HasFile;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class DashboardCompetitionController extends Controller
{
    use HasFile;

    public function index(): Response | RedirectResponse
    {
        if (! auth()->check()) {
            return to_route('login');
        }
        $id_user                        = auth()->user()->id;
        $show_registration_competitions = CompetitionRegistrations::with('user')
            ->where('user_id', $id_user)
            ->get();
        return inertia(component: 'Competition/Dashboard/DashboardCompetition', props: [
            'show_registration_competitions' => $show_registration_competitions ? CompetitionRegistrationResource::collection($show_registration_competitions) : null,
        ]);
    }

    public function show($id): Response | RedirectResponse
    {
        if (! auth()->check()) {
            return to_route('login');
        }
        $user = auth()->user();

        $show_registration_competition = CompetitionRegistrations::with('user', 'teams.team_members', 'teams')
            ->where('user_id', $user->id)
            ->where('id', $id)
            ->first();

        if (! $show_registration_competition) {
            abort(404);
        }

        $leaderRegistration = $show_registration_competition;

        if ($show_registration_competition->team_id && $show_registration_competition->teams && $show_registration_competition->teams->leader_id !== $user->id) {
            $leaderRegistration = CompetitionRegistrations::where('team_id', $show_registration_competition->team_id)
                ->where('user_id', $show_registration_competition->teams->leader_id)
                ->first();
        }

        $show_reject_reason_submission = Submissions::where('competition_registration_id', $leaderRegistration->id)
            ->value('reject_reason');

        $show_status_submission = Submissions::where('competition_registration_id', $leaderRegistration->id)
            ->value('submission_status');

        $payment_methods = PaymentMethods::get();

        return inertia(component: 'Competition/Dashboard/DashboardCompetitionDetail', props: [
            'user_competition_registrations' => fn() => $show_registration_competition ? new CompetitionRegistrationResource($show_registration_competition) : null,
            'payment_methods'                => PaymentMethodsResource::collection($payment_methods),
            'status_submission'              => $show_status_submission ?? null,
            'show_reject_reason_submission'  => $show_reject_reason_submission ?? null,
        ]);
    }

    public function update_team_name($id, TeamRegisterRequest $request): RedirectResponse
    {
        if (! auth()->check()) {
            return to_route('login');
        }

        $user                     = auth()->user();
        $team                     = Teams::findOrFail($id);
        $competitionRegistrations = CompetitionRegistrations::where('team_id', $team->id)->first();

        if ($user->id !== $team->leader_id) {
            flashMessage('Only the team leader can update the team name.', 'error');
            return to_route('dashboard.competition.index');
        }

        if ($competitionRegistrations->payment_status->value === PaymentStatus::VERIFIED->value) {
            flashMessage('Payment has already been approved. No changes allowed.', 'error');
            return to_route('dashboard.competition.index');
        } else if ($competitionRegistrations->payment_status->value === PaymentStatus::PENDING->value
            || $competitionRegistrations->payment_status->value === PaymentStatus::REQUESTED->value
            || $competitionRegistrations->payment_status->value === PaymentStatus::REJECTED->value) {

            $team->update([
                'team_name' => $request->team_name,
            ]);
            flashMessage('Team name has been updated.', 'success');
        }
        return to_route('dashboard.competition.index');
    }

    public function payment_store(PaymentStoreRequest $request, $id): RedirectResponse
    {
        $competitionRegistrations = CompetitionRegistrations::findOrFail($id);
        $competition              = Competitions::findOrFail($competitionRegistrations->competition_id);
        $user                     = $request->user();

        $in_periode_registration = CompetitionPrices::where('competition_id', $competitionRegistrations->competition_id)
            ->where('start_date', '<=', now())
            ->where('end_date', '>=', now())
            ->exists();

        if (! $in_periode_registration) {
            flashMessage('Payment period has ended', 'error');
            return back();
        }

        if ($competitionRegistrations->payment_status->value === PaymentStatus::VERIFIED->value) {
            flashMessage('Payment has already been approved. No further uploads allowed.', 'error');
            return back();
        }

        $paymentProofPath = $request->hasFile('payment_proof_path')
        ? $this->upload_file($request, 'payment_proof_path', 'competition_payments')
        : $competitionRegistrations->payment_proof_path;

        if ($competition->is_team) {
            $team = Teams::findOrFail($competitionRegistrations->team_id);

            if ($user->id !== $team->leader_id) {
                flashMessage('Only the team leader can upload the payment proof.', 'error');
                return to_route('dashboard.competition.index');
            }

            // ambil row row yang team idnya sama
            $teamRegistrations = CompetitionRegistrations::where('team_id', $team->id)->get();

            // update setiap row yang team idnya sama
            foreach ($teamRegistrations as $registration) {
                $registration->update([
                    'payment_proof_path' => $paymentProofPath,
                    'payment_status'     => $request->payment_status,
                    'competition_id'     => $competitionRegistrations->competition_id,
                    'user_id'            => $registration->user_id,
                    'code_registration'  => $registration->code_registration,
                    'total_payment'      => $competitionRegistrations->total_payment,
                    'reject_reason'      => $registration->reject_reason,
                ]);
            }
            flashMessage('Your payment proof has been uploaded.', 'success');
        } else {
            $competitionRegistrations->update([
                'payment_proof_path' => $paymentProofPath,
                'payment_status'     => $request->payment_status,
                'competition_id'     => $competitionRegistrations->competition_id,
                'user_id'            => $competitionRegistrations->user_id,
                'code_registration'  => $competitionRegistrations->code_registration,
                'total_payment'      => $competitionRegistrations->total_payment,
                'reject_reason'      => $competitionRegistrations->reject_reason,
            ]);

            flashMessage('Your payment proof has been uploaded.', 'success');
        }
        return to_route('dashboard.competition.index');
    }

    public function submission_store(SubmissionStoreRequest $request): RedirectResponse
    {
        $user         = auth()->user();
        $registration = CompetitionRegistrations::findOrFail($request->competition_registration_id);
        $competition  = Competitions::findOrFail($registration->competition_id);
        $team         = Teams::where('id', $registration->team_id)->first();

        $submission = Submissions::where('competition_registration_id', $registration->id)->first();

        $payment_status = CompetitionRegistrations::where('id', $registration->id)
            ->value('payment_status');

        $in_periode_submission = Competitions::where('id', $competition->id)
            ->where('end_submission', '>=', now())
            ->exists();

        if (in_array($payment_status->value, [
            PaymentStatus::PENDING->value,
            PaymentStatus::REQUESTED->value,
            PaymentStatus::REJECTED->value,
        ])) {
            flashMessage('Please finish your payment first', 'error');
            return to_route('dashboard.competition.index');
        }

        if ($competition->is_team) {
            if ($user->id !== $team->leader_id) {
                flashMessage('Only the team leader can upload submission', 'error');
                return to_route('dashboard.competition.index');
            }
        }

        if ($payment_status->value === PaymentStatus::VERIFIED->value) {
            if (! $submission && $competition->is_need_submission && $in_periode_submission) {
                Submissions::create([
                    'competition_registration_id' => $request->competition_registration_id,
                    'submission_link'             => $request->submission_link,
                    'submission_status'           => $request->submission_status,
                ]);
                flashMessage('Your submission has been uploaded.');
                return to_route('dashboard.competition.index');
            } else if (! $competition->is_need_submission) {
                flashMessage('This competition does not need submission.', 'error');
                return to_route('dashboard.competition.index');
            } else if (! $in_periode_submission) {
                flashMessage('Submission period has ended.', 'error');
                return to_route('dashboard.competition.index');
            }

            if (in_array($submission->submission_status->value, [
                SubmissionStatus::REJECTED->value,
                SubmissionStatus::VERIFIED->value,
            ])) {
                $submission->update([
                    'competition_registration_id' => $request->competition_registration_id,
                    'submission_link'             => $request->submission_link,
                    'submission_status'           => $request->submission_status,
                ]);
                flashMessage('Your submission has been uploaded.');
                return to_route('dashboard.competition.index');
            }

            if ($submission->submission_status->value === SubmissionStatus::PENDING->value) {
                flashMessage('Please wait until verification is done if you want to submit your submission again', 'error');
                return to_route('dashboard.competition.index');
            }
        }

        flashMessage('Unable to upload submission. Please contact admin.', 'error');
        return back();
    }

    public function destroy($id): RedirectResponse
    {
        $user         = auth()->user();
        $registration = CompetitionRegistrations::with('teams')->findOrFail($id);
        $competition  = Competitions::findOrFail($registration->competition_id);

        if ($competition->is_team) {
            $team = Teams::where('id', $registration->team_id)->first();

            if ($user->id !== $team->leader_id) {
                flashMessage('Only the team leader can cancel the registration.', 'error');
                return to_route('dashboard.competition.index');
            }

            if ($team) {
                $team->delete();
            }
        }

        $registration->delete();

        flashMessage('Your registration has been cancelled.', 'success');
        return to_route('dashboard.competition.index');
    }

    public function destroy_member($id): RedirectResponse
    {
        $user        = auth()->user();
        $team_member = TeamMembers::with('teams', 'competition_registrations')->findOrFail($id);

        if ($user->id !== $team_member->teams->leader_id) {
            flashMessage('Only the team leader can remove team member.', 'error');
            return to_route('dashboard.competition.index');
        }
        if ($team_member->competition_registrations->payment_status->value === PaymentStatus::VERIFIED->value) {
            flashMessage('Payment has already been approved. No further changes allowed.', 'error');
            return to_route('dashboard.competition.index');
        } else if ($team_member->competition_registrations->payment_status->value === PaymentStatus::PENDING->value
            || $team_member->competition_registrations->payment_status->value === PaymentStatus::REQUESTED->value
            || $team_member->competition_registrations->payment_status->value === PaymentStatus::REJECTED->value) {
            CompetitionRegistrations::find($team_member->competition_registrations->id)->delete();
            flashMessage('Your team member has been removed.', 'success');
            return to_route('dashboard.competition.index');
        }

        return back();
    }
}
