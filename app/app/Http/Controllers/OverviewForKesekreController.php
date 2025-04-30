<?php

namespace App\Http\Controllers;

use App\Models\CompetitionRegistrations;
use App\Models\EventRegistrations;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Response;

class OverviewForKesekreController extends Controller
{
    public function index(): Response
    {
        $count_participant_semnas = EventRegistrations::where('payment_status', 'Verified')->count();
        $count_participant_competition = CompetitionRegistrations::where('payment_status', 'Verified')->count();
        $sum_total_payment_semnas = EventRegistrations::where('payment_status', 'Verified')->sum('total_payment');
        $sum_total_payment_competition = CompetitionRegistrations::where('payment_status', 'Verified')->sum('total_payment');
        $count_institution = User::where('institution', '!=', null)->count();

        // dd($sum_total_payment_competition);

        return inertia(component: 'Overview', props: [
            'count_participant_semnas' => $count_participant_semnas,
            'count_participant_competition' => $count_participant_competition,
            'sum_total_payment_semnas' => $sum_total_payment_semnas,
            'sum_total_payment_competition' => $sum_total_payment_competition,
            'count_institution' => $count_institution
        ]);
    }
}
