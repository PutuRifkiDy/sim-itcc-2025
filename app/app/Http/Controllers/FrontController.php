<?php

namespace App\Http\Controllers;

use App\Http\Resources\CompetitionCategoryResource;
use App\Http\Resources\CompetitionResource;
use App\Http\Resources\EventResource;
use App\Models\CompetitionCategory;
use App\Models\Competitions;
use App\Models\Events;
use Illuminate\Http\Request;
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
                'competition_content_contact'
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
                'event_content_contact'
            ]),
        ])->where('slug', $slug)->firstOrFail();

        return inertia(component: 'Semnas/Front/Semnas', props: [
            'event' => fn() => new EventResource($event),
        ]);
    }
}
