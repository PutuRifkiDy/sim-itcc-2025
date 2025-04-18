<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventRegistrationResource;
use App\Models\EventRegistrations;
use Illuminate\Http\Request;
use Inertia\Response;
class DashboardSemnasForKesekreController extends Controller
{
    //

    public function index(): Response
    {
        $event_registrations_semnas = EventRegistrations::with('events', 'user')
            ->get();
            // ->paginate(10);

        $count_verified = EventRegistrations::where('payment_status', 'Verified')->count();
        $count_pending = EventRegistrations::where('payment_status', 'Pending')->count();
        $count_requested = EventRegistrations::where('payment_status', 'Requested')->count();
        $count_rejected = EventRegistrations::where('payment_status', 'Rejected')->count();

        return inertia(component: 'Semnas/Dashboard/DashboardKesekreSemnas', props: [
            'event_registrations_semnas' => EventRegistrationResource::collection($event_registrations_semnas),
            // ->additional([
            //     'meta' => [
            //         'has_pages' => $event_registrations_semnas->hasPages(),
            //     ],
            // ]),
            'count_verified' => $count_verified,
            'count_pending' => $count_pending,
            'count_requested' => $count_requested,
            'count_rejected' => $count_rejected
        ]);
    }
}
