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
        return Submissions::with('competition_registrations.user', 'competition_registrations.competitions', 'competition_registrations')
        ->when($this->filters['search'] ?? null, function ($query, $value) {
            $query->where(function ($q) use ($value) {
                $q->whereHas('competition_registrations.user', function ($q2) use ($value) {
                    $q2->where('name', 'REGEXP', $value);
                });
                $q->orWhereHas('competition_registrations.competitions.competition_content', function ($q3) use ($value) {
                    $q3->where('location', 'REGEXP', $value);
                });
                $q->orWhereHas('competition_registrations.competitions', function($q4) use ($value) {
                    $q4->where('name', 'REGEXP', $value);
                });
                $q->orWhereHas('competition_registrations', function($q5) use ($value) {
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
        return [
            $submission->id,
            $submission->competition_registrations->user->name ?? '-',
            $submission->competition_registrations->competitions->name ?? '-',
            $submission->competition_registrations->code_registration,
            $submission->submission_link,
            $submission->submission_status->value,
            $submission->created_at->format('Y-m-d H:i'),
        ];
    }
}
