<?php

namespace App\Models;

use App\Models\User;
use App\Models\Teams;
use App\Models\Submissions;
use App\Models\TeamMembers;
use App\Enums\PaymentStatus;
use App\Models\Competitions;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function competitions(): BelongsTo
    {
        return $this->belongsTo(Competitions::class, 'competition_id', 'id');
    }

    public function teams(): BelongsTo
    {
        return $this->belongsTo(Teams::class, 'team_id', 'id');
    }

    public function team_members(): HasMany
    {
        return $this->hasMany(TeamMembers::class, 'competition_registration_id', 'id');
    }

    public function submissions(): HasMany
    {
        return $this->hasMany(Submissions::class, 'competition_registration_id', 'id');
    }
}
