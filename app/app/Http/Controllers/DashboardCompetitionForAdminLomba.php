<?php
namespace App\Http\Controllers;

use App\Enums\SubmissionStatus;
use App\Http\Requests\RejectReasonRequest;
use App\Http\Resources\CompetitionRegistrationResource;
use App\Http\Resources\SubmissionResource;
use App\Models\CompetitionRegistrations;
use App\Models\Competitions;
use App\Models\Submissions;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class DashboardCompetitionForAdminLomba extends Controller
{
    public function show_participant(): Response
    {
        $user                           = auth()->user();
        $adminCompetitionIds            = $user->managed_competitions()->pluck('competitions.id');
        $show_competition_is_open_regis = Competitions::where('is_open_regis', true)->get('name');
        $show_all_participant           = CompetitionRegistrations::with('competitions', 'user', 'teams.team_members')
            ->whereIn('competition_id', $adminCompetitionIds)
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
            ->when(request()->competition_name, function ($query, $value) {
                $query->whereHas('competitions', function ($q) use ($value) {
                    $q->where('name', $value);
                });
            })
            ->when(true, function ($query) {
                $query->where(function ($subQuery) {
                    $subQuery
                        ->whereNull('team_id')
                        ->orWhereHas('teams', function ($q) {
                            $q->whereColumn('leader_id', 'competition_registrations.user_id');
                        });
                });
            })
            ->when(request()->field && request()->direction, fn($query) => $query->orderBy(request()->field, request()->direction))
            ->paginate(request()->load ?? 10)
            ->withQueryString();

        // tampilin data berdasarkan admin apa
        //code

        // return dd($show_competition_is_open_regis);

        return inertia(component: 'Competition/Dashboard/DashboardAdminLombaData', props: [
            'competition_registrations'      => CompetitionRegistrationResource::collection($show_all_participant)->additional([
                'meta' => [
                    'has_page' => $show_all_participant->hasPages(),
                ],
            ]),
            'show_competition_is_open_regis' => $show_competition_is_open_regis,
            'state'                          => [
                'page'             => request()->page ?? 1,
                'search'           => request()->search ?? '',
                'load'             => 10,
                'competition_name' => request()->competition_name ?? ' ',
            ],
        ]);
    }

    public function show_submission(): Response
    {
        $user                           = auth()->user();
        $adminCompetitionIds            = $user->managed_competitions()->pluck('competitions.id');
        $show_competition_is_open_regis = Competitions::where('is_open_regis', true)
            ->where('is_need_submission', true)
            ->get('name');
        $show_all_submission = Submissions::with('competition_registrations.user', 'competition_registrations.competitions', 'competition_registrations', 'competition_registrations.teams.team_members')
            ->whereHas('competition_registrations', function ($query) use ($adminCompetitionIds) {
                $query->whereIn('competition_id', $adminCompetitionIds);
            })
            ->when(request()->search, function ($query, $value) {
                $query->where(function ($q) use ($value) {
                    $q->whereHas('competition_registrations.user', function ($q2) use ($value) {
                        $q2->where('name', 'REGEXP', $value);
                    });
                    $q->orWhereHas('competition_registrations.competitions.competition_content', function ($q3) use ($value) {
                        $q3->where('location', 'REGEXP', $value);
                    });
                    $q->orWhereHas('competition_registrations.competitions', function ($q4) use ($value) {
                        $q4->where('name', 'REGEXP', $value);
                    });
                    $q->orWhereHas('competition_registrations', function ($q5) use ($value) {
                        $q5->where('code_registration', 'REGEXP', $value);
                    });

                    $q->orWhere('submission_link', 'REGEXP', $value)
                        ->orWhere('submission_status', 'REGEXP', $value);
                });
            })
            ->when(request()->competition_name, function ($query, $value) {
                $query->whereHas('competition_registrations.competitions', function ($q) use ($value) {
                    $q->where('name', $value);
                });
            })
            ->when(request()->competition_name, function ($query, $value) {
                $query->whereHas('competition_registrations.competitions', function ($q) use ($value) {
                    $q->where('name', $value);
                });
            })
            ->when(request()->field && request()->direction, fn($query) => $query->orderBy(request()->field, request()->direction))
            ->paginate(request()->load ?? 10)
            ->withQueryString();

        $count_pending  = Submissions::where('submission_status', 'Pending')->count();
        $count_verified = Submissions::where('submission_status', 'Verified')->count();
        $count_rejected = Submissions::where('submission_status', 'Rejected')->count();

        return inertia(component: 'Competition/Dashboard/DashboardAdminLombaSubmission', props: [
            'submissions'                    => SubmissionResource::collection($show_all_submission)->additional([
                'meta' => [
                    'has_page' => $show_all_submission->hasPages(),
                ],
            ]),
            'show_competition_is_open_regis' => $show_competition_is_open_regis,
            'state'                          => [
                'page'             => request()->page ?? 1,
                'search'           => request()->search ?? '',
                'load'             => 10,
                'competition_name' => request()->competition_name ?? '',
            ],

            'count_pending'                  => $count_pending,
            'count_verified'                 => $count_verified,
            'count_rejected'                 => $count_rejected,

        ]);
    }

    public function verif_submission($id): RedirectResponse
    {
        Submissions::find($id)->update([
            'submission_status' => SubmissionStatus::VERIFIED->value,
        ]);

        flashMessage('Submission has been verified.', 'success');
        return back();
    }

    public function reject_submission($id, RejectReasonRequest $request): RedirectResponse
    {
        Submissions::find($id)->update([
            'submission_status' => SubmissionStatus::REJECTED->value,
            'reject_reason'     => $request->reject_reason,
        ]);

        flashMessage('Submission has been rejected.', 'success');
        return back();
    }
}
