<?php
namespace App\Http\Controllers;

use App\Http\Resources\CompetitionRegistrationResource;
use App\Http\Resources\SubmissionResource;
use App\Models\CompetitionRegistrations;
use App\Models\Submissions;
use Illuminate\Http\Request;
use Inertia\Response;

class DashboardCompetitionForAdminLomba extends Controller
{
    public function show_participant(): Response
    {
        $show_all_participant = CompetitionRegistrations::with('competitions', 'user')
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
            ->when(request()->field && request()->direction, fn($query) => $query->orderBy(request()->field, request()->direction))
            ->paginate(request()->load ?? 10)
            ->withQueryString();

        // tampilin data berdasarkan admin apa
        //code

        return inertia(component: 'Competition/Dashboard/DashboardAdminLombaData', props: [
            'competition_registrations' => CompetitionRegistrationResource::collection($show_all_participant)->additional([
                'meta' => [
                    'has_page' => $show_all_participant->hasPages(),
                ],
            ]),

            'state'                     => [
                'page'   => request()->page ?? 1,
                'search' => request()->search ?? '',
                'load'   => 10,
            ],
        ]);
    }

    public function show_submission(): Response
    {
        $show_all_submission = Submissions::get();

        return inertia(component: 'Competition/Dashboard/DashboardAdminLombaSubmission', props: [
            'submissions' => new SubmissionResource($show_all_submission),
        ]);
    }
}
