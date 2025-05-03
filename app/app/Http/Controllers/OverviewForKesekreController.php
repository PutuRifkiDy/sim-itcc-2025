<?php
namespace App\Http\Controllers;

use App\Models\CompetitionRegistrations;
use App\Models\EventRegistrations;
use App\Models\User;
use Inertia\Response;

class OverviewForKesekreController extends Controller
{
    public function index(): Response
    {

        // untuk jumlah semnas
        $count_participant_semnas = EventRegistrations::where('payment_status', 'Verified')
            ->count();

        // untuk jumlah competition
        $count_individual_competition = CompetitionRegistrations::where('payment_status', 'Verified')
            ->whereNull('team_id')
            ->count();
        $count_team_competition = CompetitionRegistrations::where('payment_status', 'Verified')
            ->whereNotNull('team_id')
            ->distinct('team_id')
            ->count();
        $count_participant_competition = $count_individual_competition + $count_team_competition;

        // untuk total payment semnas
        $sum_total_payment_semnas = EventRegistrations::where('payment_status', 'Verified')
            ->sum('total_payment');

        // untuk total payment competition
        $sum_total_payment_individual_competition = CompetitionRegistrations::where('payment_status', 'Verified')
            ->whereNull('team_id')
            ->sum('total_payment');
        $sum_total_payment_team_competition = CompetitionRegistrations::where('payment_status', 'Verified')
            ->whereNotNull('team_id')
            ->groupBy('team_id')
            ->selectRaw('MIN(total_payment) as total_payment')
            ->get()
            ->sum('total_payment');
        $sum_total_payment_competition = $sum_total_payment_individual_competition + $sum_total_payment_team_competition;

        $count_institution = User::where('institution', '!=', null)
            ->count();

        return inertia(component: 'Overview', props: [
            'count_participant_semnas'      => $count_participant_semnas,
            'count_participant_competition' => $count_participant_competition,
            'sum_total_payment_semnas'      => $sum_total_payment_semnas,
            'sum_total_payment_competition' => $sum_total_payment_competition,
            'count_institution'             => $count_institution,
        ]);
    }
}
