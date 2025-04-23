<?php

namespace App\Http\Controllers;

use App\Http\Resources\CompetitionRegistrationResource;
use App\Http\Resources\PaymentMethodsResource;
use App\Models\CompetitionRegistrations;
use App\Models\PaymentMethods;
use App\Traits\HasFile;
use Illuminate\Http\RedirectResponse;
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
}
