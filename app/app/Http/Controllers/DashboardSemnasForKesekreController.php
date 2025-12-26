<?php
namespace App\Http\Controllers;

use App\Enums\PaymentStatus;
use App\Http\Requests\RejectReasonRequest;
use App\Http\Resources\EventRegistrationResource;
use App\Mail\TicketMail;
use App\Models\EventRegistrations;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Inertia\Response;
use Intervention\Image\Laravel\Facades\Image;

class DashboardSemnasForKesekreController extends Controller
{
    //

    public function index(): Response|RedirectResponse
    {
        $user = auth()->user();
        if (!$user) {
            return to_route('login');
        }
        if (!$user->hasRole('admin')) {
            return to_route('login');
        }
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

        $count_verified = EventRegistrations::where('payment_status', 'Verified')->count();
        $count_pending = EventRegistrations::where('payment_status', 'Pending')->count();
        $count_requested = EventRegistrations::where('payment_status', 'Requested')->count();
        $count_rejected = EventRegistrations::where('payment_status', 'Rejected')->count();

        return inertia(component: 'Semnas/Dashboard/DashboardKesekreSemnas', props: [
            'event_registrations_semnas' => EventRegistrationResource::collection($event_registrations_semnas)->additional([
                'meta' => [
                    'has_page' => $event_registrations_semnas->hasPages(),
                ],
            ]),

            'state' => [
                'page' => request()->page ?? 1,
                'search' => request()->search ?? '',
                'load' => 10,
                'payment_status' => request()->payment_status ?? '',
            ],

            'count_verified' => $count_verified,
            'count_pending' => $count_pending,
            'count_requested' => $count_requested,
            'count_rejected' => $count_rejected,
        ]);
    }

    public function verif_payment($id): RedirectResponse
    {
        $registration = EventRegistrations::findOrFail($id);
        if (
            in_array($registration->payment_status->value, [
                PaymentStatus::REQUESTED->value,
                PaymentStatus::REJECTED->value,
            ])
        ) {
            flashMessage('Payment proof has not been uploaded.', 'error');
            return back();
        }

        EventRegistrations::find($id)->update([
            'payment_status' => PaymentStatus::VERIFIED->value,
        ]);

        $ticketTemplate = public_path('assets/images/ticket_template.png');
        $ticket = Image::read($ticketTemplate);

        $ticket->text($registration->code_registration ?? '0', 2840, 840, function ($font) {
            $font->file(public_path('assets/fonts/Rubik-Bold.ttf'));
            $font->size(40);
            $font->color('#000000');
            $font->align('right');
            $font->valign('middle');
        });

        $ticketPath = 'tickets/ticket_' . $registration->user_id . '.png';
        Storage::disk('public')->makeDirectory('tickets');

        $ticket->save(storage_path('app/public/' . $ticketPath));

        $registration->update(['ticket_path' => $ticketPath]);

        Mail::to($registration->user->email)->send(new TicketMail($registration));


        flashMessage('Payment has been verified.', 'success');
        return back();
    }

    public function reject_payment($id, RejectReasonRequest $request): RedirectResponse
    {
        EventRegistrations::find($id)->update([
            'payment_status' => PaymentStatus::REJECTED->value,
            'reject_reason' => $request->reject_reason,
        ]);

        flashMessage('Payment has been rejected.', 'success');
        return back();
    }
}
