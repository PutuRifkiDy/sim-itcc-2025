<?php

namespace App\Models;

use App\Enums\PaymentStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetitionRegistrations extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'competition_id',
        'team_id',
        'code_registration',
        'payment_proof_path',
        'total_payment',
        'payment_status',
        'reject_reason',
    ];

    protected function casts(): array
    {
        return [
            'payment_status' => PaymentStatus::class
        ];
    }
}
