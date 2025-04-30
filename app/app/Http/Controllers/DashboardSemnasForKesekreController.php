<?php
namespace App\Http\Controllers;

use App\Enums\PaymentStatus;
use App\Http\Requests\RejectReasonRequest;
use App\Http\Resources\EventRegistrationResource;
use App\Models\EventRegistrations;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class DashboardSemnasForKesekreController extends Controller
{
    //

    public function index(): Response
    {
        $event_registrations_semnas = EventRegistrations::with('events', 'user')
            ->when(request()->search, function ($query, $value) {
                $query->where(function ($q) use ($value) {
                    $q->whereHas('user', function ($q2) use ($value) {
                        $q2->where('name', 'REGEXP', $value);
                    });
                    $q->orWhereHas('events.event_content', function ($q3) use ($value) {
                        $q3->where('location', 'REGEXP', $value);
                    });

                    $q->orWhere('payment_status', 'REGEXP', $value)
                        ->orWhere('total_payment', 'REGEXP', $value);
                });
            })
            ->when(request()->field && request()->direction, fn($query) => $query->orderBy(request()->field, request()->direction))
            ->paginate(request()->load ?? 10)
            ->withQueryString();

        $count_verified  = EventRegistrations::where('payment_status', 'Verified')->count();
        $count_pending   = EventRegistrations::where('payment_status', 'Pending')->count();
        $count_requested = EventRegistrations::where('payment_status', 'Requested')->count();
        $count_rejected  = EventRegistrations::where('payment_status', 'Rejected')->count();

        return inertia(component: 'Semnas/Dashboard/DashboardKesekreSemnas', props: [
            'event_registrations_semnas' => EventRegistrationResource::collection($event_registrations_semnas)->additional([
                'meta' => [
                    'has_page' => $event_registrations_semnas->hasPages(),
                ],
            ]),

            'state'                      => [
                'page'  => request()->page ?? 1,
                'searh' => request()->search ?? '',
                'load' => 10,
            ],

            'count_verified'             => $count_verified,
            'count_pending'              => $count_pending,
            'count_requested'            => $count_requested,
            'count_rejected'             => $count_rejected,
        ]);
    }

    public function verif_payment($id): RedirectResponse
    {
        EventRegistrations::find($id)->update([
            'payment_status' => PaymentStatus::VERIFIED->value,
        ]);

        flashMessage('Payment has been verified.', 'success');
        return to_route('dashboard.overview.admin-kesekre.index');
    }

    public function reject_payment($id, RejectReasonRequest $request): RedirectResponse
    {
        EventRegistrations::find($id)->update([
            'payment_status' => PaymentStatus::REJECTED->value,
            'reject_reason'  => $request->reject_reason,
        ]);

        flashMessage('Payment has been rejected.', 'success');
        return back();
    }
}
