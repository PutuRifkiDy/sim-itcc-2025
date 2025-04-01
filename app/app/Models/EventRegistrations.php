<?php

namespace App\Models;

use App\Models\User;
use App\Models\Events;
use App\Enums\PaymentStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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

    public function events(): BelongsTo
    {
        return $this->belongsTo(Events::class);
    }

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

}
