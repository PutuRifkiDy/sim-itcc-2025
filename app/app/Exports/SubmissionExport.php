<?php
namespace App\Exports;

use App\Models\Submissions;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class SubmissionExport implements FromCollection, WithHeadings, WithMapping
{
    /**
     * @return \Illuminate\Support\Collection
     */
    protected $filters;

    public function __construct($filters = [])
    {
        $this->filters = $filters;
    }

    public function collection()
    {
        $user = auth()->user();
        if (! $user) {
            return to_route('login');
        }
        $adminCompetitionIds = $user->managed_competitions()->pluck('competitions.id');
        return Submissions::with('competition_registrations.user', 'competition_registrations.competitions', 'competition_registrations', 'competition_registrations.teams', 'competition_registrations.teams.team_members')
            // ->whereIn('competition_registrations.competitions.id', $adminCompetitionIds)
            ->whereHas('competition_registrations.competitions', function ($query) use ($adminCompetitionIds) {
                $query->whereIn('id', $adminCompetitionIds);
            })
            ->when($this->filters['search'] ?? null, function ($query, $value) {
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
            ->get();
    }

    public function headings(): array
    {
        return [
            'ID',
            'Name',
            'Competition Name',
            'Registration Code',
            'Submission Link',
            'Submission Status',
            'Registered At',
        ];
    }

    public function map($submission): array
    {
        if ($submission->competition_registrations->competitions->is_team) {
            $codeRegistrations = [];

            foreach ($submission->competition_registrations->teams->team_members as $team_member) {
                $code = $team_member->competition_registrations->code_registration;

                if ($code) {
                    $codeRegistrations[] = $code;
                }
            }

            $codeRegistrations = implode(', ', $codeRegistrations);
        } else {
            $codeRegistrations = $submission->competition_registrations->code_registration;
        }

        return [
            $submission->id,
            $submission->competition_registrations->competitions->is_team ? $submission->competition_registrations->teams->team_name : $submission->competition_registrations->user->name,
            $submission->competition_registrations->competitions->name ?? '-',
            $codeRegistrations,
            $submission->submission_link,
            $submission->submission_status->value,
            $submission->created_at->format('Y-m-d H:i'),
        ];
    }
}
