<?php
namespace App\Exports;

use App\Models\CompetitionRegistrations;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class CompetitionParticipantExport implements FromCollection, WithHeadings, WithMapping
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
        return CompetitionRegistrations::with('user', 'competitions.competition_content', 'teams', 'competitions', 'teams.team_members')
            ->whereIn('competition_id', $adminCompetitionIds)
            ->when($this->filters['search'] ?? null, function ($query, $value) {
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
            ->when(true, function ($query) {
                $query->where(function ($subQuery) {
                    $subQuery
                        ->whereNull('team_id')
                        ->orWhereHas('teams', function ($q) {
                            $q->whereColumn('leader_id', 'competition_registrations.user_id');
                        });
                });
            })
            ->get();
    }

    public function headings(): array
    {
        return [
            'ID',
            'Name',
            'Institution',
            'Competition Name',
            'Location',
            'Registration Code',
            'Payment Status',
            'Total Payment',
            'Registered At',
        ];
    }

    public function map($competitionRegistrations): array
    {
        // untuk data code registrations
        if ($competitionRegistrations->competitions->is_team) {
            $codeRegistration = [];
            foreach ($competitionRegistrations->teams->team_members as $team_member) {
                $code = $team_member->competition_registrations->code_registration;

                if ($code) {
                    $codeRegistration[] = $code;
                }
            }
            $codeRegistration = implode(', ', $codeRegistration);
        } else {
            $codeRegistration = $competitionRegistrations->code_registration;
        }

        // untuk data institutions
        if ($competitionRegistrations->competitions->is_team) {
            $institutions = [];

            foreach ($competitionRegistrations->teams->team_members as $team_member) {
                $institution = $team_member->competition_registrations->user->institution;

                if ($institution) {
                    $institutions[] = $institution;
                }
            }

            $institutions = implode(', ', $institutions);
        } else {
            $institutions = $competitionRegistrations->user->institution;
        }

        return [
            $competitionRegistrations->id,
            $competitionRegistrations->competitions->is_team ? $competitionRegistrations->teams->team_name : $competitionRegistrations->user->name,
            $institutions,
            $competitionRegistrations->competitions->name ?? '-',
            optional($competitionRegistrations->competitions->competition_content->first())->location ?? '-',
            $codeRegistration,
            $competitionRegistrations->payment_status->value,
            $competitionRegistrations->total_payment,
            $competitionRegistrations->created_at->format('Y-m-d H:i'),
        ];
    }
}
