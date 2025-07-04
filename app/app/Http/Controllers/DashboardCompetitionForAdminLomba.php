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
    public function show_participant(): Response | RedirectResponse
    {
        $user = auth()->user();
        if (! $user) {
            return to_route('login');
        }
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
                    $q->orWhereHas('teams', function ($q4) use ($value) {
                        $q4->where('team_name', 'REGEXP', $value);
                    });
                    $q->orWhereHas('competitions', function ($q5) use ($value) {
                        $q5->where('name', 'REGEXP', $value);
                    });

                    $q->orWhere('payment_status', 'REGEXP', $value)
                        ->orWhere('total_payment', 'REGEXP', $value)
                        ->orWhere('code_registration', 'REGEXP', $value);
                });
            })
            ->when(request()->payment_status, function ($query, $value) {
                $query->where('payment_status', $value);
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
                'payment_status'   => request()->payment_status ?? '',
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
                    $q->orWhereHas('competition_registrations.teams', function ($q6) use ($value) {
                        $q6->where('team_name', 'REGEXP', $value);
                    });

                    $q->orWhere('submission_link', 'REGEXP', $value)
                        ->orWhere('submission_status', 'REGEXP', $value);
                });
            })
            ->when(request()->submission_status, function ($query, $value) {
                $query->where('submission_status', $value);
            })
            ->when(request()->field && request()->direction, fn($query) => $query->orderBy(request()->field, request()->direction))
            ->paginate(request()->load ?? 10)
            ->withQueryString();

        $count_pending = Submissions::where('submission_status', 'Pending')
            ->whereHas('competition_registrations', function ($query) use ($adminCompetitionIds) {
                $query->whereIn('competition_id', $adminCompetitionIds);
            })
            ->count();
        $count_verified = Submissions::where('submission_status', 'Verified')
            ->whereHas('competition_registrations', function ($query) use ($adminCompetitionIds) {
                $query->whereIn('competition_id', $adminCompetitionIds);
            })
            ->count();
        $count_rejected = Submissions::where('submission_status', 'Rejected')
            ->whereHas('competition_registrations', function ($query) use ($adminCompetitionIds) {
                $query->whereIn('competition_id', $adminCompetitionIds);
            })
            ->count();

        return inertia(component: 'Competition/Dashboard/DashboardAdminLombaSubmission', props: [
            'submissions'                    => SubmissionResource::collection($show_all_submission)->additional([
                'meta' => [
                    'has_page' => $show_all_submission->hasPages(),
                ],
            ]),
            'show_competition_is_open_regis' => $show_competition_is_open_regis,
            'state'                          => [
                'page'              => request()->page ?? 1,
                'search'            => request()->search ?? '',
                'load'              => 10,
                'submission_status' => request()->submission_status ?? '',
            ],

            'count_pending'                  => $count_pending,
            'count_verified'                 => $count_verified,
            'count_rejected'                 => $count_rejected,

        ]);
    }

    public function verif_submission($id): RedirectResponse
    {
        $submission = Submissions::findOrFail($id);
        if (in_array($submission->submission_status->value, [
            SubmissionStatus::REQUESTED->value,
            SubmissionStatus::REJECTED->value,
        ])) {
            flashMessage('Submission link has not been uploaded.', 'error');
            return back();
        }

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
