<?php
namespace App\Http\Controllers;

use App\Models\CompetitionRegistrations;
use App\Models\EventRegistrations;
use App\Models\User;
use Carbon\Carbon;
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
            'monthly_sales_chart'           => $this->monthlySalesChart(),
            'monthly_registrations_chart'  => $this->monthlyRegistrationsChart(),
        ]);
    }

    public function monthlyRegistrationsChart(): array
    {
        $currentDate  = Carbon::now();
        $sixMonthsAgo = $currentDate->copy()->subMonths(5);

        $labels          = [];
        $semnasData      = [];
        $competitionData = [];

        for($i = 0; $i < 6; $i++) {
            $monthLabel = $sixMonthsAgo->format('F');
            $labels[]   = $monthLabel;

            // Banyak registrations semnas
            $semnasTotal = EventRegistrations::where('payment_status', 'Verified')
                ->whereMonth('created_at', $sixMonthsAgo->month)
                ->whereYear('created_at', $sixMonthsAgo->year)
                ->count();

            // Banyak registrations competition individual
            $individualTotal = CompetitionRegistrations::where('payment_status', 'Verified')
                ->whereNull('team_id')
                ->whereMonth('created_at', $sixMonthsAgo->month)
                ->whereYear('created_at', $sixMonthsAgo->year)
                ->count();

            // Banyak registrations competition team (by team, per team)
            $teamTotal = CompetitionRegistrations::where('payment_status', 'Verified')
                ->whereNotNull('team_id')
                ->whereMonth('created_at', $sixMonthsAgo->month)
                ->whereYear('created_at', $sixMonthsAgo->year)
                ->groupBy('team_id')
                ->selectRaw('MIN(total_payment) as total_payment')
                ->get()
                ->count();

            $semnasData[]      = $semnasTotal;
            $competitionData[] = $individualTotal + $teamTotal;

            $sixMonthsAgo->addMonth();
        }

        return [
            'labels'   => $labels,
            'datasets' => [
                [
                    'label'           => 'Semnas Registrations',
                    'data'            => $semnasData,
                    'backgroundColor' => '#3b82f6',
                    'borderColor'     => '#3b82f6',
                ],
                [
                    'label'           => 'Competition Registrations',
                    'data'            => $competitionData,
                    'backgroundColor' => '#6CB9AD',
                    'borderColor'     => '#6CB9AD',
                ],
            ],
        ];
    }

    public function monthlySalesChart(): array
    {
        $currentDate  = Carbon::now();
        $sixMonthsAgo = $currentDate->copy()->subMonths(5);

        $labels          = [];
        $semnasData      = [];
        $competitionData = [];

        for ($i = 0; $i < 6; $i++) {
            $monthLabel = $sixMonthsAgo->format('F');
            $labels[]   = $monthLabel;

            // Jumlah Semnas
            $semnasTotal = EventRegistrations::where('payment_status', 'Verified')
                ->whereMonth('created_at', $sixMonthsAgo->month)
                ->whereYear('created_at', $sixMonthsAgo->year)
                ->sum('total_payment');

            // Jumlah Competition Individual
            $individualTotal = CompetitionRegistrations::where('payment_status', 'Verified')
                ->whereNull('team_id')
                ->whereMonth('created_at', $sixMonthsAgo->month)
                ->whereYear('created_at', $sixMonthsAgo->year)
                ->sum('total_payment');

            // Jumlah Competition Team (by team, per team)
            $teamTotal = CompetitionRegistrations::where('payment_status', 'Verified')
                ->whereNotNull('team_id')
                ->whereMonth('created_at', $sixMonthsAgo->month)
                ->whereYear('created_at', $sixMonthsAgo->year)
                ->groupBy('team_id')
                ->selectRaw('MIN(total_payment) as total_payment')
                ->get()
                ->sum('total_payment');

            $semnasData[]      = $semnasTotal;
            $competitionData[] = $individualTotal + $teamTotal;

            $sixMonthsAgo->addMonth();
        }

        return [
            'labels'   => $labels,
            'datasets' => [
                [
                    'label'           => 'Semnas Sales',
                    'data'            => $semnasData,
                    'backgroundColor' => '#3b82f6',
                    'tension'         => 0,
                    'borderColor'     => '#3b82f6',
                ],
                [
                    'label'           => 'Competition Sales',
                    'data'            => $competitionData,
                    'backgroundColor' => '#6CB9AD',
                    'tension'         => 0,
                    'borderColor'     => '#6CB9AD',
                ],
            ],
        ];
    }
}
