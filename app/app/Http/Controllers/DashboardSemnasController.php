<?php
namespace App\Http\Controllers;

use App\Http\Requests\PaymentStoreRequest;
use App\Http\Resources\EventRegistrationResource;
use App\Http\Resources\NavbarResource;
use App\Http\Resources\PaymentMethodsResource;
use App\Models\Competitions;
use App\Models\EventRegistrations;
use App\Models\PaymentMethods;
use App\Traits\HasFile;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class DashboardSemnasController extends Controller
{
    use HasFile;

    public function index(): Response|RedirectResponse
    {
        if (!auth()->check()) {
            return Inertia::location(route('login'));
        }

        $id_user = auth()->user()->id;

        $find_event_id = EventRegistrations::where('user_id', $id_user)
            ->value('event_id');

        $show_registration_semnas = EventRegistrations::with('events', 'user')
            ->where('event_id', $find_event_id)
            ->where('user_id', $id_user)
            ->first();

        $payment_methods = PaymentMethods::where('id', '1')->first();

        return inertia(component: 'Semnas/Dashboard/DashboardSemnas', props: [
            'event_registrations' => fn() => $show_registration_semnas ? new EventRegistrationResource($show_registration_semnas) : null,
            'payment_methods' => new PaymentMethodsResource($payment_methods),
            'competitions' => fn() => new NavbarResource(Competitions::get()),
        ]);
    }

    public function payment_store(PaymentStoreRequest $request, $id): RedirectResponse
    {
        $eventRegistrations = EventRegistrations::find($id);
        // dd($eventRegistrations->event_id);

        EventRegistrations::find($id)->update([
            'payment_proof_path' => $request->hasFile('payment_proof_path') ? $this->upload_file($request, 'payment_proof_path', 'semnas_payments') : $eventRegistrations->payment_proof_path,
            'payment_status' => $request->payment_status,
            'event_id' => $eventRegistrations->event_id,
            'user_id' => $eventRegistrations->user_id,
            'code_registration' => $eventRegistrations->code_registration,
            'total_payment' => $eventRegistrations->total_payment,
            'reject_reason' => $eventRegistrations->reject_reason,
        ]);

        flashMessage('Your payment proof has been uploaded.', 'success');
        return back();
    }

    public function destroy($id): RedirectResponse
    {
        EventRegistrations::find($id)->delete();
        flashMessage('Your registration has been cancelled.', 'success');
        return back();
    }
}
