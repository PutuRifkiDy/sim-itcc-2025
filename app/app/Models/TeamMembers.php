<?php

namespace App\Models;

use App\Models\Teams;
use Illuminate\Database\Eloquent\Model;
use App\Models\CompetitionRegistrations;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TeamMembers extends Model
{
    use HasFactory;

    protected $fillable = [
        'team_id',
        'competition_registration_id',
    ];

    public function teams(): BelongsTo
    {
        return $this->belongsTo(Teams::class);
    }

    public function competition_registrations(): BelongsTo
    {
        return $this->belongsTo(CompetitionRegistrations::class);
    }
}
