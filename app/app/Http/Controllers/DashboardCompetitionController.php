<?php
namespace App\Http\Controllers;

use App\Enums\PaymentStatus;
use App\Enums\SubmissionStatus;
use App\Http\Requests\PaymentStoreRequest;
use App\Http\Requests\SubmissionStoreRequest;
use App\Http\Resources\CompetitionRegistrationResource;
use App\Http\Resources\NavbarResource;
use App\Http\Resources\PaymentMethodsResource;
use App\Models\CompetitionRegistrations;
use App\Models\Competitions;
use App\Models\PaymentMethods;
use App\Models\Submissions;
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

        $id_user = auth()->user()->id;

        $find_competition_id = CompetitionRegistrations::where('user_id', $id_user)
            ->value('competition_id');

        $show_registration_competition = CompetitionRegistrations::with('competitions', 'user')
            ->where('competition_id', $find_competition_id)
            ->where('user_id', $id_user)
            ->first();

        if ($show_registration_competition) {
            $show_status_submission = Submissions::where('competition_registration_id', $show_registration_competition->id)
                ->value('submission_status');
        }

        $payment_methods = PaymentMethods::where('id', '1')->first();

        return inertia(component: 'Competition/Dashboard/DashboardCompetition', props: [
            'competition_registrations' => fn() => $show_registration_competition ? new CompetitionRegistrationResource($show_registration_competition) : null,
            'payment_methods'           => new PaymentMethodsResource($payment_methods),
            'status_submission'         => $show_status_submission ?? null,
        ]);
    }

    public function payment_store(PaymentStoreRequest $request, $id): RedirectResponse
    {
        // Minus Jika team maka leader yang hanya bisa upload payment
        $competitionRegistrations = CompetitionRegistrations::find($id);

        CompetitionRegistrations::find($id)->update([
            'payment_proof_path' => $request->hasFile('payment_proof_path') ? $this->upload_file($request, 'payment_proof_path', 'competition_payments') : $competitionRegistrations->payment_proof_path,
            'payment_status'     => $request->payment_status,
            'competition_id'     => $competitionRegistrations->competition_id,
            'user_id'            => $competitionRegistrations->user_id,
            'code_registration'  => $competitionRegistrations->code_registration,
            'total_payment'      => $competitionRegistrations->total_payment,
            'reject_reason'      => $competitionRegistrations->reject_reason,
        ]);

        flashMessage('Your payment proof has been uploaded.', 'success');
        return back();
    }

    public function submission_store(SubmissionStoreRequest $request): RedirectResponse
    {
        $find_status_submission = Submissions::where('competition_registration_id', $request->competition_registration_id)
            ->value('submission_status');

        $find_status_payment = CompetitionRegistrations::where('id', $request->competition_registration_id)
            ->value('payment_status');

        if ($find_status_submission) {
            if ($find_status_submission->value == SubmissionStatus::PENDING->value) {
                flashMessage('Please wait until verification is done if you want to submit your submission again', 'error');
                return back();
            } else if (
                $find_status_submission->value == SubmissionStatus::VERIFIED->value ||
                $find_status_submission->value == SubmissionStatus::REJECTED->value ||
                $find_status_submission->value == SubmissionStatus::REQUESTED->value) {

                Submissions::query()->create([
                    'competition_registration_id' => $request->competition_registration_id,
                    'submission_link'             => $request->submission_link,
                    'submission_status'           => $request->submission_status,
                ]);
            }
        } else if (
            $find_status_payment->value == PaymentStatus::PENDING->value ||
            $find_status_payment->value == PaymentStatus::REQUESTED->value ||
            $find_status_payment->value == PaymentStatus::REJECTED->value
        ) {
            flashMessage('Please finish your payment first', 'error');
            return back();
        }

        flashMessage('Your submission has been uploaded.', 'success');
        return back();
    }

    public function destroy($id): RedirectResponse
    {
        CompetitionRegistrations::find($id)->delete();
        flashMessage('Your registration has been cancelled.', 'success');
        return back();
    }
}
