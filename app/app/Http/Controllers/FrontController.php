<?php
namespace App\Http\Controllers;

use App\Http\Requests\CompetitionRegistrationRequest;
use App\Http\Requests\SemnasRegistrationRequest;
use App\Http\Requests\TeamJoinRegisterRequest;
use App\Http\Requests\TeamRegisterRequest;
use App\Http\Resources\CompetitionResource;
use App\Http\Resources\EventResource;
use App\Http\Resources\MerchandiseResource;
use App\Models\CompetitionContent;
use App\Models\CompetitionContentTimeline;
use App\Models\CompetitionPrices;
use App\Models\CompetitionRegistrations;
use App\Models\Competitions;
use App\Models\EventContent;
use App\Models\EventContentTimeline;
use App\Models\EventPrices;
use App\Models\EventRegistrations;
use App\Models\Events;
use App\Models\Merchandise;
use App\Models\TeamMembers;
use App\Models\Teams;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Str;

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

        $get_id_content = CompetitionContent::where('competition_id', $competition->id)
            ->value('id');

        $current_periode = CompetitionContentTimeline::where('competition_content_id', $get_id_content)
            ->where('start_date', '<=', now())
            ->where('end_date', '>=', now())
            ->first();

        if (! $current_periode) {
            $current_periode = CompetitionContentTimeline::where('competition_content_id', $get_id_content)
                ->where('start_date', '>', now())
                ->orderBy('start_date')
                ->first();
        }

        // $count_days = (int) Carbon::now()->diffInDays(Carbon::parse( $current_periode?->end_date));
        $diffInSeconds = Carbon::now()->diffInSeconds(Carbon::parse($current_periode?->end_date), false);

        if ($diffInSeconds < 0) {
            $remaining_time = [
                'status'  => 'expired',
                'hours'   => 0,
                'minutes' => 0,
                'seconds' => 0,
            ];
        } else {
            $remaining_time = [
                'status'  => 'active',
                'hours'   => floor($diffInSeconds / 3600),
                'minutes' => floor(($diffInSeconds % 3600) / 60),
                'seconds' => $diffInSeconds % 60,
            ];
        }

        return inertia('Competition/Front/Competitions', [
            'competition'     => fn()     => new CompetitionResource($competition),
            'current_batch'   => $current_batch,
            'current_periode' => $current_periode,
            'remaining_time'  => $remaining_time,
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

        $get_id_content = EventContent::where('event_id', $event->id)
            ->value('id');

        $current_periode = EventContentTimeline::where('event_content_id', $get_id_content)
            ->where('start_date', '<=', now())
            ->where('end_date', '>=', now())
            ->first();

        if (! $current_periode) {
            $current_periode = EventContentTimeline::where('event_content_id', $get_id_content)
                ->where('start_date', '>', now())
                ->orderBy('start_date')
                ->first();
        }

        $diffInSeconds = Carbon::now()->diffInSeconds(Carbon::parse($current_periode?->end_date), false);

        if ($diffInSeconds < 0) {
            $remaining_time = [
                'status'  => 'expired',
                'hours'   => 0,
                'minutes' => 0,
                'seconds' => 0,
            ];
        } else {
            $remaining_time = [
                'status'  => 'active',
                'hours'   => floor($diffInSeconds / 3600),
                'minutes' => floor(($diffInSeconds % 3600) / 60),
                'seconds' => $diffInSeconds % 60,
            ];
        }

        return inertia(component: 'Semnas/Front/Semnas', props: [
            'event'           => fn()           => new EventResource($event),
            'current_batch'   => $current_batch,
            'current_periode' => $current_periode,
            'remaining_time'  => $remaining_time,
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

    // tampilin form register kalo lombanya berteam
    public function show_register_competition(Competitions $competition): Response
    {
        $slug             = Competitions::where('slug', $competition->slug)->value('slug');
        $name_competition = Competitions::where('slug', $competition->slug)->value('name');

        return inertia(component: 'Competition/Front/Register', props: [
            'slug'             => $slug,
            'name_competition' => $name_competition,
        ]);
    }

    // tampilin form input register create team
    public function show_register_competition_team(Competitions $competition): Response
    {
        return inertia(component: 'Competition/Front/RegisterTeam', props: [
            'slug' => $competition,
        ]);
    }

    // tampilin form input untuk join team
    public function show_register_competition_join_team(Competitions $competition): Response
    {
        return inertia(component: 'Competition/Front/RegisterJoinTeam', props: [
            'slug' => $competition,
        ]);
    }

    // store register create team
    public function store_register_competition_team(TeamRegisterRequest $request, Competitions $competition): RedirectResponse
    {
        $user = $request->user();

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

        $get_competition = Competitions::where('id', $competition->id)->with('competition_category')->first();

        do {
            $token = Str::random(6);
        } while (Teams::where('token', $token)->exists());

        if ($already_registered) {
            flashMessage('You have already registered for this competition.', 'error');
            return back();
        } else if ($in_periode_registration == false) {
            flashMessage('The registration period for this competition has ended.', 'error');
            return back();
        } else if ($request->user()->already_filled == false) {
            flashMessage('Please fill your profile first.', 'error');
            return back();
        } else if ($request->user()->status->value != $get_competition->competition_category->category_name) {
            flashMessage('You are not allowed to register for this competition.', 'error');
            return back();
        } else if ($request->user()->already_filled == true && $request->user()->status->value == $get_competition->competition_category->category_name) {
            $team = $user->teams()->create([
                'leader_id'      => $user->id,
                'competition_id' => $competition->id,
                'team_name'      => $request->team_name,
                'token'          => $token,
            ]);

            // Create competition registration
            $competition_registration = $user->competition_registrations()->create([
                'team_id'           => $team->id,
                'competition_id'    => $competition->id,
                'user_id'           => $user->id,
                'code_registration' => $competition->kode . '-' . '00' . $request->user()->id,
                'total_payment'     => $total_payment ?? 0,
            ]);

            // Create team member
            $team->team_members()->create([
                'team_id'                     => $team->id,
                'competition_registration_id' => $competition_registration->id,
            ]);
        }

        flashMessage('Your registration has been successful.');

        return to_route('dashboard.competition.index');
    }

    // store register join team
    public function store_register_competition_join_team(TeamJoinRegisterRequest $request, Competitions $competition): RedirectResponse
    {
        $user = $request->user();

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
        $get_competition = Competitions::where('id', $competition->id)
            ->with('competition_category')
            ->first();
        $get_token_exist = Teams::where('token', $request->token)->exists();

        if ($get_token_exist) {
            $get_data_team = Teams::where('token', $request->token)->first();

            $get_leader_registration = CompetitionRegistrations::where('team_id', $get_data_team->id)
                ->where('user_id', $get_data_team->leader_id)
                ->first();
        } else {
            flashMessage('Team with this token does not exist.', 'error');
            return back();
        }

        // buat kondisi maximal 3 orang di 1 team
        $get_team_member = TeamMembers::where('team_id', $get_data_team->id)
            ->count();
        if ($get_team_member >= 3) {
            flashMessage('The maximum number of team members has been reached.', 'error');
            return back();
        }

        if ($already_registered) {
            flashMessage('You have already registered for this competition.', 'error');
            return back();
        } else if ($in_periode_registration == false) {
            flashMessage('The registration period for this competition has ended.', 'error');
            return back();
        } else if ($request->user()->already_filled == false) {
            flashMessage('Please fill your profile first.', 'error');
            return back();
        } else if ($request->user()->status->value != $get_competition->competition_category->category_name) {
            flashMessage('You are not allowed to register for this competition.', 'error');
            return back();
        } else if ($request->user()->already_filled == true && $request->user()->status->value == $get_competition->competition_category->category_name && $get_token_exist == true) {
            $competition_registration = $user->competition_registrations()->create([
                'user_id'           => $user->id,
                'competition_id'    => $competition->id,
                'team_id'           => $get_data_team->id,
                'code_registration' => $competition->kode . '-' . '00' . $request->user()->id,
                'total_payment'     => $total_payment ?? 0,
                'payment_status'    => $get_leader_registration->payment_status,
                'payment_proof'     => $get_leader_registration->payment_proof_path,
            ]);

            $team_member = TeamMembers::create([
                'team_id'                     => $get_data_team->id,
                'competition_registration_id' => $competition_registration->id,
            ]);
        }

        flashMessage('Your registration has been successful.');

        return to_route('dashboard.competition.index');
    }

    // store register competition kalo ga team
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

        $get_competition = Competitions::where('id', $competition->id)->with('competition_category')->first();

        if ($already_registered) {
            flashMessage('You have already registered for this competition.', 'error');
            return back();
        } else if ($in_periode_registration == false) {
            flashMessage('The registration period for this competition has ended.', 'error');
            return back();
        } else if ($request->user()->already_filled == false) {
            flashMessage('Please fill your profile first.', 'error');
            return back();
        } else if ($request->user()->status->value != $get_competition->competition_category->category_name) {
            flashMessage('You are not allowed to register for this competition.', 'error');
            return back();
        } else if ($request->user()->already_filled == true && $request->user()->status->value == $get_competition->competition_category->category_name) {
            $request->user()->competition_registrations()->create([
                'competition_id'    => $competition->id,
                'user_id'           => auth()->user()->user_id,
                'code_registration' => $competition->kode . '-' . '00' . $request->user()->id,
                'total_payment'     => $total_payment ?? 0,
            ]);
        }

        flashMessage('Your registration has been successful.');

        return to_route('dashboard.competition.index');
    }
}
