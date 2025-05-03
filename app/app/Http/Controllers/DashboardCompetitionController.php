<?php
namespace App\Http\Controllers;

use App\Enums\PaymentStatus;
use App\Enums\SubmissionStatus;
use App\Http\Requests\PaymentStoreRequest;
use App\Http\Requests\SubmissionStoreRequest;
use App\Http\Resources\CompetitionRegistrationResource;
use App\Http\Resources\PaymentMethodsResource;
use App\Http\Resources\TeamMembersResource;
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
        $id_user = auth()->user()->id;

        $show_registration_competition = CompetitionRegistrations::with('user', 'teams.team_members')
            ->where('user_id', $id_user)
            ->where('id', $id)
            ->first();

        $show_reject_reason_submission = Submissions::where('competition_registration_id', $show_registration_competition->id)
            ->value('reject_reason');

        if ($show_registration_competition) {
            $show_status_submission = Submissions::where('competition_registration_id', $show_registration_competition->id)
                ->value('submission_status');
        }

        $payment_methods = PaymentMethods::where('id', '1')->first();

        return inertia(component: 'Competition/Dashboard/DashboardCompetitionDetail', props: [
            'user_competition_registrations' => fn() => $show_registration_competition ? new CompetitionRegistrationResource($show_registration_competition) : null,
            'payment_methods'                => new PaymentMethodsResource($payment_methods),
            'status_submission'              => $show_status_submission ?? null,
            'show_reject_reason_submission'  => $show_reject_reason_submission ?? null,
        ]);
    }

    public function payment_store(PaymentStoreRequest $request, $id): RedirectResponse
    {
        // Minus Jika team maka leader yang hanya bisa upload payment
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
        $submission = Submissions::where('competition_registration_id', $request->competition_registration_id)->first();

        $payment_status = CompetitionRegistrations::where('id', $request->competition_registration_id)
            ->value('payment_status');

        $find_competition_id = CompetitionRegistrations::where('id', $request->competition_registration_id)
            ->value('competition_id');

        $is_need_submission = Competitions::where('id', $find_competition_id)
            ->value('is_need_submission');

        $in_periode_submission = Competitions::where('id', $find_competition_id)
            ->where('end_submission', '>=', now())
            ->exists();

        $is_leader = Teams::where('leader_id', $request->user()->id)->exists();

        if (in_array($payment_status->value, [
            PaymentStatus::PENDING->value,
            PaymentStatus::REQUESTED->value,
            PaymentStatus::REJECTED->value,
        ])) {
            flashMessage('Please finish your payment first', 'error');
            return to_route('dashboard.competition.index');
        }

        if ($payment_status->value === PaymentStatus::VERIFIED->value) {
            if (! $submission && $is_need_submission && $in_periode_submission && $is_leader) {
                Submissions::create([
                    'competition_registration_id' => $request->competition_registration_id,
                    'submission_link'             => $request->submission_link,
                    'submission_status'           => $request->submission_status,
                ]);
                flashMessage('Your submission has been uploaded.');
                return back();
            } else if (! $is_need_submission) {
                flashMessage('This competition does not need submission.', 'error');
                return back();
            } else if (! $in_periode_submission) {
                flashMessage('Submission period has ended.', 'error');
                return back();
            } else if (! $is_leader) {
                flashMessage('You are not leader.', 'error');
                return back();
            }

            if (in_array($submission->submission_status->value, [
                SubmissionStatus::REJECTED->value,
                SubmissionStatus::VERIFIED->value,
            ])) {
                if ($is_leader) {
                    $submission->update([
                        'competition_registration_id' => $request->competition_registration_id,
                        'submission_link'             => $request->submission_link,
                        'submission_status'           => $request->submission_status,
                    ]);
                    flashMessage('Your submission has been uploaded.');
                    return back();
                } else {
                    flashMessage('You are not leader.', 'error');
                    return back();
                }
            }

            if ($submission->submission_status->value === SubmissionStatus::PENDING->value) {
                flashMessage('Please wait until verification is done if you want to submit your submission again', 'error');
                return back();
            }
        }

        flashMessage('Unable to upload submission. Please contact admin.', 'error');
        return back();
    }

    public function destroy($id): RedirectResponse
    {
        $user = auth()->user();
        $registration = CompetitionRegistrations::with('teams')->findOrFail($id);
        $competition = Competitions::findOrFail($registration->competition_id);

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
}
