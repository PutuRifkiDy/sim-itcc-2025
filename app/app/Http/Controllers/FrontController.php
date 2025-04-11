<?php

namespace App\Http\Controllers;

use App\Http\Resources\CompetitionCategoryResource;
use App\Http\Resources\CompetitionResource;
use App\Models\CompetitionCategory;
use App\Models\Competitions;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FrontController extends Controller
{
    public function show_competition(string $slug): Response
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
            'competition_registrations',
            'teams',
        ])->where('slug', $slug)->firstOrFail();

        return Inertia::render('Competition/Front/Competitions', [
            'competition' => fn() => new CompetitionResource($competition),
        ]);
    }
}
