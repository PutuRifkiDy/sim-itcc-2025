<?php
namespace App\Http\Controllers;

use App\Http\Requests\PaymentStoreRequest;
use App\Http\Resources\EventRegistrationResource;
use App\Http\Resources\NavbarResource;
use App\Http\Resources\PaymentMethodsResource;
use App\Models\Competitions;
use App\Models\EventPrices;
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
            return to_route('login');
        }

        $id_user = auth()->user()->id;

        $find_event_id = EventRegistrations::where('user_id', $id_user)
            ->value('event_id');

        $show_registration_semnas = EventRegistrations::with('events', 'user')
            ->where('event_id', $find_event_id)
            ->where('user_id', $id_user)
            ->first();

        $payment_methods = PaymentMethods::get();

        return inertia(component: 'Semnas/Dashboard/DashboardSemnas', props: [
            'event_registrations' => fn() => $show_registration_semnas ? new EventRegistrationResource($show_registration_semnas) : null,
            'payment_methods' => PaymentMethodsResource::collection($payment_methods),
        ]);
    }

    public function payment_store(PaymentStoreRequest $request, $id): RedirectResponse
    {
        $eventRegistrations = EventRegistrations::find($id);

        $in_periode_registration = EventPrices::where('event_id', $eventRegistrations->event_id)
            ->where('start_date', '<=', now())
            ->where('end_date', '>=', now())
            ->exists();

        if($in_periode_registration == true) {
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
        } else if ($in_periode_registration == false) {
            flashMessage('Payment period has ended', 'error');
            return back();
        }

        return back();
    }

    public function destroy($id): RedirectResponse
    {
        EventRegistrations::find($id)->delete();
        flashMessage('Your registration has been cancelled.', 'success');
        return back();
    }
}
