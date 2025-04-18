<?php

namespace App\Exports;

use App\Models\EventRegistrations;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;


class EventRegistrationsExport implements FromCollection, WithHeadings, WithMapping
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
        // return EventRegistrations::with('user', 'events')->get();
        return EventRegistrations::with('user', 'events.event_content')
        ->when($this->filters['search'] ?? null, function ($query, $value) {
            $query->where(function ($q) use ($value) {
                $q->whereHas('user', function ($q2) use ($value) {
                    $q2->where('name', 'REGEXP', $value);
                });
                $q->orWhereHas('events.event_content', function ($q3) use ($value) {
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
            'Event Name',
            'Location',
            'Registration Code',
            'Payment Status',
            'Total Payment',
            'Registered At',
        ];
    }

    public function map($eventRegistration): array
    {
        return [
            $eventRegistration->id,
            $eventRegistration->user->name ?? '-',
            $eventRegistration->user->institution ?? '-',
            $eventRegistration->events->name ?? '-',
            optional($eventRegistration->events->event_content->first())->location ?? '-',
            $eventRegistration->code_registration,
            $eventRegistration->payment_status->value,
            $eventRegistration->total_payment,
            $eventRegistration->created_at->format('Y-m-d H:i'),
        ];
    }
}
