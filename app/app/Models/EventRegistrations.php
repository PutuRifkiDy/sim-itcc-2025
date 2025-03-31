<?php

namespace App\Models;

use App\Enums\PaymentStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventRegistrations extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'user_id',
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
