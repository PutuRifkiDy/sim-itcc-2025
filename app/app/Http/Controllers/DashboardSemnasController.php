<?php
namespace App\Http\Controllers;

use App\Http\Resources\EventRegistrationResource;
use App\Http\Resources\PaymentMethodsResource;
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
            'payment_methods' => new PaymentMethodsResource($payment_methods)
        ]);
    }
}
