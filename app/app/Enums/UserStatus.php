<?php

namespace App\Enums;

enum UserStatus: string
{
    case MAHASISWA = 'Mahasiswa';
    case SMASMK = 'SMASMK';
    case SMP = 'SMP';
    case SD = 'SD';
    case UMUM = 'UMUM';

    public static function options(): array
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->name
        ])->values()->toArray();
    }
}
