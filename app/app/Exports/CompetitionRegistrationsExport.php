<?php

namespace App\Exports;

use App\Models\CompetitionRegistrations;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class CompetitionRegistrationsExport implements FromCollection, WithHeadings, WithMapping
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
        return CompetitionRegistrations::with('user', 'competitions.competition_content')
        ->when($this->filters['search'] ?? null, function ($query, $value) {
            $query->where(function ($q) use ($value) {
                $q->whereHas('user', function ($q2) use ($value) {
                    $q2->where('name', 'REGEXP', $value);
                });
                $q->orWhereHas('competitions.competition_content', function ($q3) use ($value) {
                    $q3->where('location', 'REGEXP', $value);
                });
                $q->orWhere('payment_status', 'REGEXP', $value)
                  ->orWhere('total_payment', 'REGEXP', $value);
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
        return [
            $competitionRegistrations->id,
            $competitionRegistrations->user->name ?? '-',
            $competitionRegistrations->user->institution ?? '-',
            $competitionRegistrations->competitions->name ?? '-',
            optional($competitionRegistrations->competitions->competition_content->first())->location ?? '-',
            $competitionRegistrations->code_registration,
            $competitionRegistrations->payment_status->value,
            $competitionRegistrations->total_payment,
            $competitionRegistrations->created_at->format('Y-m-d H:i'),
        ];
    }
}
