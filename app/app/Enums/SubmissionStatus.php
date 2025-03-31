<?php

namespace App\Enums;

enum SubmissionStatus: string
{
    case REQUESTED = 'Requested';
    case PENDING = 'Pending';
    case VERIFIED = 'Verified';
    case REJECTED = 'Rejected';

    public static function options(): array
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->name
        ])->values()->toArray();
    }
}
