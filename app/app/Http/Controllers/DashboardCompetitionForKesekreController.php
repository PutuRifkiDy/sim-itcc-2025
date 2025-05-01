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
            ->paginate(request()->load ?? 10)
            ->withQueryString();

        $count_verified  = CompetitionRegistrations::where('payment_status', 'Verified')->count();
        $count_pending   = CompetitionRegistrations::where('payment_status', 'Pending')->count();
        $count_requested = CompetitionRegistrations::where('payment_status', 'Requested')->count();
        $count_rejected  = CompetitionRegistrations::where('payment_status', 'Rejected')->count();

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
        // dd($id);

        CompetitionRegistrations::find($id)->update([
            'payment_status' => PaymentStatus::VERIFIED->value,
        ]);

        flashMessage('Payment has been verified.', 'success');
        return back();
    }

    public function reject_payment($id, RejectReasonRequest $request): RedirectResponse
    {
        CompetitionRegistrations::find($id)->update([
            'payment_status' => PaymentStatus::REJECTED->value,
            'reject_reason'  => $request->reject_reason,
        ]);

        flashMessage('Payment has been rejected.', 'success');
        return back();
    }
}
