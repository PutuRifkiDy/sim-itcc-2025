<?php

namespace App\Http\Controllers;

use App\Http\Requests\PaymentStoreRequest;
use App\Http\Resources\CompetitionRegistrationResource;
use App\Http\Resources\PaymentMethodsResource;
use App\Models\CompetitionRegistrations;
use App\Models\PaymentMethods;
use App\Traits\HasFile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class DashboardCompetitionController extends Controller
{
    use HasFile;
    public function index(): Response|RedirectResponse
    {
        if (!auth()->check()) {
            return to_route('login');
        }

        $id_user = auth()->user()->id;

        $find_competition_id = CompetitionRegistrations::where('user_id', $id_user)
            ->value('competition_id');

        $show_registration_competition = CompetitionRegistrations::with('competitions', 'user')
            ->where('competition_id', $find_competition_id)
            ->where('user_id', $id_user)
            ->first();

        $payment_methods = PaymentMethods::where('id', '1')->first();

        return inertia(component: 'Competition/Dashboard/DashboardCompetition', props: [
            'competition_registrations' => fn() => $show_registration_competition ? new CompetitionRegistrationResource($show_registration_competition) : null,
            'payment_methods' => new PaymentMethodsResource($payment_methods)
        ]);
    }

    // public function payment_store(PaymentStoreRequest $request, $id): RedirectResponse
    // {
    //     $eventRegistrations = EventRegistrations::find($id);
    //     // dd($eventRegistrations->event_id);

    //     EventRegistrations::find($id)->update([
    //         'payment_proof_path' => $request->hasFile('payment_proof_path') ? $this->upload_file($request, 'payment_proof_path', 'semnas_payments') : $eventRegistrations->payment_proof_path,
    //         'payment_status' => $request->payment_status,
    //         'event_id' => $eventRegistrations->event_id,
    //         'user_id' => $eventRegistrations->user_id,
    //         'code_registration' => $eventRegistrations->code_registration,
    //         'total_payment' => $eventRegistrations->total_payment,
    //         'reject_reason' => $eventRegistrations->reject_reason,
    //     ]);

    //     flashMessage('Your payment proof has been uploaded.', 'success');
    //     return back();
    // }

    public function payment_store(PaymentStoreRequest $request, $id): RedirectResponse
    {
        $competitionRegistrations = CompetitionRegistrations::find($id);

        CompetitionRegistrations::find($id)->update([
            'payment_proof_path' => $request->hasFile('payment_proof_path') ? $this->upload_file($request, 'payment_proof_path', 'competition_payments') : $competitionRegistrations->payment_proof_path,
            'payment_status' => $request->payment_status,
            'competition_id' => $competitionRegistrations->competition_id,
            'user_id' => $competitionRegistrations->user_id,
            'code_registration' => $competitionRegistrations->code_registration,
            'total_payment' => $competitionRegistrations->total_payment,
            'reject_reason' => $competitionRegistrations->reject_reason,
        ]);

        flashMessage('Your payment proof has been uploaded.', 'success');
        return back();
    }
}
