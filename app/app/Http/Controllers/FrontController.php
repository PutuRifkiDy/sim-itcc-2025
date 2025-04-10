<?php

namespace App\Http\Controllers;

use App\Http\Resources\CompetitionResource;
use App\Models\Competitions;
use Illuminate\Http\Request;
use Inertia\Response;

class FrontController extends Controller
{
    public function show_competition(Competitions $competition): Response
    {
        return inertia(component: 'Competition/Front/Competitions', props: [
            'competitions' => fn() => CompetitionResource::colection($competition->load([
                'competition_categories', 'competition_prices',
                'competition_prize',
                'competition_content', 'competition_registrations', 'teams'
            ]))
        ]);
    }
}
