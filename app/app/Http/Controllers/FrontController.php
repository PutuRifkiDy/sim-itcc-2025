<?php
namespace App\Http\Controllers;

use App\Http\Requests\SemnasRegistrationRequest;
use App\Http\Resources\CompetitionResource;
use App\Http\Resources\EventResource;
use App\Http\Resources\MerchandiseResource;
use App\Models\Competitions;
use App\Models\EventPrices;
use App\Models\Events;
use App\Models\Merchandise;
use Illuminate\Http\RedirectResponse;
use Redirect;
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

        return inertia('Competition/Front/Competitions', [
            'competition' => fn() => new CompetitionResource($competition),
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

        return inertia(component: 'Semnas/Front/Semnas', props: [
            'event' => fn() => new EventResource($event),
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
        $show_register_semnas = Events::where('is_open_regis', true)->get();
        return inertia(component: 'Semnas/Front/Register', props: [
            'show_register_semnas' => EventResource::collection($show_register_semnas),
        ]);
    }

    public function store_register_semnas(SemnasRegistrationRequest $request, Events $event): RedirectResponse
    {
        // dd($request);
        $code_registration = Events::where('slug', $request->slug)->select('kode')->first();

        $total_payment = EventPrices::where('event_id', $event->id)->where('start_date', '<=', now())->where('end_date', '>=', now())->select('price')->first();

        if ($request->user()->user_id == auth()->user()->user_id) {
            flashMessage('You have already registered for this event.', 'danger');
        }

        if ($request->user()->already_filled == true) {
            $request->user()->event_registrations()->create([
                'event_id'          => $event->id,
                'user_id'           => $request->user()->user_id,
                'code_registration' => $code_registration->kode . '-' . '00' . $request->user()->id,
                'total_payment'     => $total_payment->price,
            ]);
            flashMessage('Your registration has been successful.');
        } else if($request->user()->already_filled == false) {
            flashMessage('Please fill your profile first.', 'danger');
        }

        return to_route('dashboard');

    }
}
