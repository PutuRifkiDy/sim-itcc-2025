<?php
namespace App\Http\Controllers;

use App\Enums\PaymentStatus;
use App\Http\Requests\RejectReasonRequest;
use App\Http\Resources\CompetitionRegistrationResource;
use App\Models\CompetitionRegistrations;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class DashboardCompetitionForKesekreController extends Controller
{
    public function index(): Response
    {
        $competition_registrations = CompetitionRegistrations::with('competitions', 'user')
            ->when(request()->search, function ($query, $value) {
                $query->where(function ($q) use ($value) {
                    $q->whereHas('user', function ($q2) use ($value) {
                        $q2->where('name', 'REGEXP', $value);
                    });
                    $q->orWhereHas('competitions.competition_content', function ($q3) use ($value) {
                        $q3->where('location', 'REGEXP', $value);
                    });

                    $q->orWhere('payment_status', 'REGEXP', $value)
                        ->orWhere('total_payment', 'REGEXP', $value)
                        ->orWhere('code_registration', 'REGEXP', $value);
                });
            })
            ->when(request()->payment_status, function ($query, $value) {
                $query->where('payment_status', $value);
            })
            ->when(request()->field && request()->direction, fn($query) => $query->orderBy(request()->field, request()->direction))
            ->when(true, function($query) {
                $query->where(function ($subQuery) {
                    $subQuery
                        ->whereNull('team_id')
                        ->orWhereHas('teams', function($q) {
                            $q->whereColumn('leader_id', 'competition_registrations.user_id');
                        });
                });
            })
            ->paginate(request()->load ?? 10)
            ->withQueryString();

        // verified
        $count_team_verified  = CompetitionRegistrations::where('payment_status', 'Verified')
            ->whereNotNull('team_id')
            ->distinct('team_id')
            ->count();
        $count_individual_verified  = CompetitionRegistrations::where('payment_status', 'Verified')
            ->whereNull('team_id')
            ->count();
        $count_verified  = $count_individual_verified + $count_team_verified;

        // pending
        $count_team_pending  = CompetitionRegistrations::where('payment_status', 'Pending')
            ->whereNotNull('team_id')
            ->distinct('team_id')
            ->count();
        $count_individual_pending  = CompetitionRegistrations::where('payment_status', 'Pending')
            ->whereNull('team_id')
            ->count();
        $count_pending  = $count_individual_pending + $count_team_pending;

        // requested
        $count_team_requested  = CompetitionRegistrations::where('payment_status', 'Requested')
            ->whereNotNull('team_id')
            ->distinct('team_id')
            ->count();
        $count_individual_requested  = CompetitionRegistrations::where('payment_status', 'Requested')
            ->whereNull('team_id')
            ->count();
        $count_requested  = $count_individual_requested + $count_team_requested;

        // rejected
        $count_team_rejected  = CompetitionRegistrations::where('payment_status', 'Rejected')
            ->whereNotNull('team_id')
            ->distinct('team_id')
            ->count();
        $count_individual_rejected  = CompetitionRegistrations::where('payment_status', 'Rejected')
            ->whereNull('team_id')
            ->count();
        $count_rejected  = $count_individual_rejected + $count_team_rejected;
        
        return inertia(component: 'Competition/Dashboard/DashboardKesekreCompetition', props: [
            'admin_competition_registrations' => CompetitionRegistrationResource::collection($competition_registrations)->additional([
                'meta' => [
                    'has_page' => $competition_registrations->hasPages(),
                ],
            ]),

            'state'                           => [
                'page'   => request()->page ?? 1,
                'search' => request()->search ?? '',
                'load'   => 10,
                'payment_status' => request()->payment_status ?? '',
            ],

            'count_verified'                  => $count_verified,
            'count_pending'                   => $count_pending,
            'count_requested'                 => $count_requested,
            'count_rejected'                  => $count_rejected,
        ]);
    }

    public function verif_payment($id): RedirectResponse
    {
        $registration = CompetitionRegistrations::findOrFail($id);

        if ($registration->team_id) {
            CompetitionRegistrations::where('team_id', $registration->team_id)
                ->update([
                    'payment_status' => PaymentStatus::VERIFIED->value,
                ]);
        } else {
            $registration->update([
                'payment_status' => PaymentStatus::VERIFIED->value,
            ]);
        }
        flashMessage('Payment has been verified.', 'success');
        return back();
    }

    public function reject_payment($id, RejectReasonRequest $request): RedirectResponse
    {
        $registration = CompetitionRegistrations::findOrFail($id);

        if ($registration->team_id) {
            CompetitionRegistrations::where('team_id', $registration->team_id)
                ->update([
                    'payment_status' => PaymentStatus::REJECTED->value,
                    'reject_reason'  => $request->reject_reason,
                ]);
        } else {
            $registration->update([
                'payment_status' => PaymentStatus::REJECTED->value,
                'reject_reason'  => $request->reject_reason,
            ]);
        }

        flashMessage('Payment has been rejected.', 'success');
        return back();
    }
}
