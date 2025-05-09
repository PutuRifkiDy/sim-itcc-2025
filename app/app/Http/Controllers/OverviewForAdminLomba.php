<?php
namespace App\Http\Controllers;

use App\Models\CompetitionRegistrations;
use App\Models\EventRegistrations;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class OverviewForAdminLomba extends Controller
{
    public function index(): Response | RedirectResponse
    {
        $user = auth()->user();
        if (! $user) {
            return to_route('login');
        }
        $adminCompetitionIds = $user->managed_competitions()->select('competitions.id', 'competitions.is_team')->get();
        $adminIds            = $adminCompetitionIds->pluck('id');

        // untuk banyak competition
        $count_competition = CompetitionRegistrations::where('payment_status', 'Verified')
            ->whereIn('competition_id', $adminIds)
            ->count();

        // untuk jumlah competition
        $sum_total_payment_competition = CompetitionRegistrations::where('payment_status', 'Verified')
            ->whereIn('competition_id', $adminIds)
            ->sum('total_payment');

        return inertia(component: 'Competition/Dashboard/Overview', props: [
            'count_competition'             => $count_competition,
            'sum_total_payment_competition' => $sum_total_payment_competition,
            'monthly_sales_chart'           => $this->monthlySalesChart(),
            'monthly_registrations_chart'  => $this->monthlyRegistrationsChart(),
        ]);
    }

    public function monthlyRegistrationsChart(): array|RedirectResponse
    {
        $user = auth()->user();
        if (! $user) {
            return to_route('login');
        }

        $adminCompetitionIds = $user->managed_competitions()->select('competitions.id', 'competitions.is_team')->get();
        $adminIds            = $adminCompetitionIds->pluck('id');

        $currentDate  = Carbon::now();
        $sixMonthsAgo = $currentDate->copy()->subMonths(5);

        $labels          = [];
        $competitionData = [];

        for($i = 0; $i < 6; $i++) {
            $monthLabel = $sixMonthsAgo->format('F');
            $labels[]   = $monthLabel;

            $competitionTotal = CompetitionRegistrations::where('payment_status', 'Verified')
                ->whereMonth('created_at', $sixMonthsAgo->month)
                ->whereYear('created_at', $sixMonthsAgo->year)
                ->whereIn('competition_id', $adminIds)
                ->count();

            $competitionData[] = $competitionTotal;

            $sixMonthsAgo->addMonth();
        }

        return [
            'labels'   => $labels,
            'datasets' => [
                [
                    'label'           => 'Competition Registrations',
                    'data'            => $competitionData,
                    'backgroundColor' => '#6CB9AD',
                    'borderColor'     => '#6CB9AD',
                ],
            ],
        ];
    }

    public function monthlySalesChart(): array|RedirectResponse
    {
        $user = auth()->user();
        if (! $user) {
            return to_route('login');
        }

        $adminCompetitionIds = $user->managed_competitions()->select('competitions.id', 'competitions.is_team')->get();
        $adminIds            = $adminCompetitionIds->pluck('id');

        $currentDate  = Carbon::now();
        $sixMonthsAgo = $currentDate->copy()->subMonths(5);

        $labels          = [];
        $competitionData = [];

        for ($i = 0; $i < 6; $i++) {
            $monthLabel = $sixMonthsAgo->format('F');
            $labels[]   = $monthLabel;

            $competitionTotal = CompetitionRegistrations::where('payment_status', 'Verified')
                ->whereIn('competition_id', $adminIds)
                ->whereMonth('created_at', $sixMonthsAgo->month)
                ->whereYear('created_at', $sixMonthsAgo->year)
                ->sum('total_payment');

            $competitionData[] = $competitionTotal;

            $sixMonthsAgo->addMonth();
        }

        return [
            'labels'   => $labels,
            'datasets' => [
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
