<?php
namespace App\Http\Controllers;

use App\Models\CompetitionRegistrations;
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

        // untuk target competition
        $target_competition = [
            [
                'id'                 => 1,
                'target_participant' => 50,
                'target_sales'       => 5100000,
            ],
            [
                'id'                 => 2,
                'target_participant' => 0,
                'target_sales'       => 0,
            ],
            [
                'id'                 => 3,
                'target_participant' => 50,
                'target_sales'       => 3625000,
            ],
            [
                'id'                 => 4,
                'target_participant' => 100,
                'target_sales'       => 3875000,
            ],
            [
                'id'                 => 4,
                'target_participant' => 100,
                'target_sales'       => 3875000,
            ],
            [
                'id'                 => 5,
                'target_participant' => 50,
                'target_sales'       => 3625000,
            ],
            [
                'id'                 => 6,
                'target_participant' => 0,
                'target_sales'       => 0,
            ],
            [
                'id'                 => 7,
                'target_participant' => 30,
                'target_sales'       => 3525000,
            ],
            [
                'id'                 => 8,
                'target_participant' => 50,
                'target_sales'       => 4000000,
            ],
            [
                'id'                 => 8,
                'target_participant' => 50,
                'target_sales'       => 4875000,
            ],
            [
                'id'                 => 9,
                'target_participant' => 50,
                'target_sales'       => 4875000,
            ],
            [
                'id'                 => 10,
                'target_participant' => 100,
                'target_sales'       => 6250000,
            ],
            [
                'id'                 => 11,
                'target_participant' => 100,
                'target_sales'       => 6250000,
            ],
        ];

        $target_competition_admin_lomba = collect($target_competition)
            ->where('id', $adminCompetitionIds->first()->id)
            ->first();

        $object_target_competition_admin_lomba = (object) $target_competition_admin_lomba;

        if ($count_competition > 0) {
            $percentage_participant = ($count_competition / $object_target_competition_admin_lomba->target_participant ) * 100;
        } else {
            $percentage_participant = 0;
        }

        if ($sum_total_payment_competition > 0) {
            $percentage_sales = ($sum_total_payment_competition / $object_target_competition_admin_lomba->target_sales) * 100;
        } else {
            $percentage_sales = 0;
        }

        return inertia(component: 'Competition/Dashboard/Overview', props: [
            'count_competition'             => $count_competition,
            'sum_total_payment_competition' => number_format($sum_total_payment_competition),
            'monthly_sales_chart'           => $this->monthlySalesChart(),
            'monthly_registrations_chart'   => $this->monthlyRegistrationsChart(),
            'percentage_participant'        => number_format($percentage_participant, 0),
            'percentage_sales'              => number_format($percentage_sales, 0),
            'target_competition'            => $object_target_competition_admin_lomba,
        ]);
    }

    public function monthlyRegistrationsChart(): array | RedirectResponse
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

    public function monthlySalesChart(): array | RedirectResponse
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
