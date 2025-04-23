<?php
namespace App\Http\Controllers;

use App\Http\Requests\CompetitionRegistrationRequest;
use App\Http\Requests\SemnasRegistrationRequest;
use App\Http\Resources\CompetitionResource;
use App\Http\Resources\EventResource;
use App\Http\Resources\MerchandiseResource;
use App\Models\CompetitionPrices;
use App\Models\CompetitionRegistrations;
use App\Models\Competitions;
use App\Models\EventPrices;
use App\Models\EventRegistrations;
use App\Models\Events;
use App\Models\Merchandise;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class FrontController extends Controller
{
    public function show_competitions(string $slug): Response
    {
        $competition = Competitions::with([
            'competition_category',
            'competition_prices',
            'competition_content' => fn($q) => $q->with([
                'competition_content_prizes',
                'competition_content_timeline',
                'competition_content_faq',
                'competition_content_contact',
            ]),
        ])->where('slug', $slug)->firstOrFail();

        $current_batch = $competition->competition_prices()
            ->where('start_date', '<=', now())
            ->where('end_date', '>=', now())
            ->first();

        if (! $current_batch) {
            $current_batch = $competition->competition_prices()
                ->where('start_date', '>', now())
                ->orderBy('start_date')
                ->first();
        }

        return inertia('Competition/Front/Competitions', [
            'competition' => fn() => new CompetitionResource($competition),
            'current_batch' => $current_batch
        ]);
    }

    public function show_events(string $slug): Response
    {
        $event = Events::with([
            'event_prices',
            'event_content' => fn($q) => $q->with([
                'event_content_timeline',
                'event_content_faq',
                'event_content_contact',
            ]),
        ])->where('slug', $slug)->firstOrFail();

        $current_batch = $event->event_prices()
            ->where('start_date', '<=', now())
            ->where('end_date', '>=', now())
            ->first();

        if (! $current_batch) {
            $current_batch = $event->event_prices()
                ->where('start_date', '>', now())
                ->orderBy('start_date')
                ->first();
        }

        return inertia(component: 'Semnas/Front/Semnas', props: [
            'event'         => fn()         => new EventResource($event),
            'current_batch' => $current_batch,
        ]);
    }

    public function show_merchandise(): Response
    {
        $merchandise = Merchandise::select('name', 'slug', 'price', 'image_path', 'description', 'batch_name', 'start_date', 'end_date')->get();
        return inertia(component: 'Merchandise', props: [
            'merchandise' => MerchandiseResource::collection($merchandise),
        ]);
    }

    public function show_register_semnas(): Response
    {
        $show_register_semnas = Events::where('is_open_regis', true)->where('event_type', 'semnas')->get();
        return inertia(component: 'Semnas/Front/Register', props: [
            'show_register_semnas' => EventResource::collection($show_register_semnas),
        ]);
    }

    // store register semnas
    public function store_register_semnas(SemnasRegistrationRequest $request, Events $event): RedirectResponse
    {
        $already_registered = EventRegistrations::where('user_id', $request->user()->id)
            ->where('event_id', $event->id)
            ->exists();
        $ensure_user_must_regis_one_event = EventRegistrations::where('user_id', $request->user()->id)
            ->where('event_id', '!=', $event->id)
            ->exists();
        $total_payment = EventPrices::where('event_id', $event->id)
            ->where('start_date', '<=', now())
            ->where('end_date', '>=', now())->value('price');
        $in_periode_registration = EventPrices::where('event_id', $event->id)
            ->where('start_date', '<=', now())
            ->where('end_date', '>=', now())
            ->exists();

        if ($already_registered) {
            flashMessage('You have already registered for this event.', 'error');
            return back();
        } else if ($ensure_user_must_regis_one_event) {
            flashMessage('You have already registered for another event.', 'error');
            return back();
        } else if ($request->user()->already_filled == false) {
            flashMessage('Please fill your profile first.', 'error');
            return back();
        } else if ($in_periode_registration == false) {
            flashMessage('The registration period for this event has ended.', 'error');
            return back();
        } else if ($request->user()->already_filled == true) {
            $request->user()->event_registrations()->create([
                'event_id'          => $event->id,
                'user_id'           => auth()->user()->user_id,
                'code_registration' => $event->kode . '-' . '00' . $request->user()->id,
                'total_payment'     => $total_payment ?? 0,
            ]);
        }
        flashMessage('Your registration has been successful.');

        return to_route('dashboard.semnas.index');

    }

    // store register competition
    public function store_register_competition(CompetitionRegistrationRequest $request, Competitions $competition): RedirectResponse
    {
        $already_registered = CompetitionRegistrations::where('user_id', $request->user()->id)
            ->where('competition_id', $competition->id)
            ->exists();
        $total_payment = CompetitionPrices::where('competition_id', $competition->id)
            ->where('start_date', '<=', now())
            ->where('end_date', '>=', now())
            ->value('price');
        $in_periode_registration = CompetitionPrices::where('competition_id', $competition->id)
            ->where('start_date', '<=', now())
            ->where('end_date', '>=', now())
            ->exists();

        if ($already_registered) {
            flashMessage('You have already registered for this competition.', 'error');
            return back();
        } else if ($in_periode_registration == false) {
            flashMessage('The registration period for this competition has ended.', 'error');
            return back();
        } else if ($request->user()->already_filled == false) {
            flashMessage('Please fill your profile first.', 'error');
            return back();
        } else if ($request->user()->already_filled == true) {
            $request->user()->competition_registrations()->create([
                'competition_id'    => $competition->id,
                'user_id'           => auth()->user()->user_id,
                'code_registration' => $competition->kode . '-' . '00' . $request->user()->id,
                'total_payment'     => $total_payment ?? 0
            ]);
        }

        flashMessage('Your registration has been successful.');

        return to_route('dashboard.competition.index');
    }
}
