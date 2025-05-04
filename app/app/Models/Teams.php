<?php

namespace App\Models;

use App\Models\User;
use App\Models\TeamMembers;
use App\Models\Competitions;
use Illuminate\Database\Eloquent\Model;
use App\Models\CompetitionRegistrations;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Teams extends Model
{
    use HasFactory;

    protected $fillable = [
        'leader_id',
        'competition_id',
        'team_name',
        'token',
    ];

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class, 'leader_id', 'id');
    }

    public function competitions(): BelongsTo
    {
        return $this->belongsTo(Competitions::class);
    }

    public function competition_registrations(): HasMany
    {
        return $this->hasMany(CompetitionRegistrations::class, 'team_id', 'id');
    }

    public function team_members(): HasMany
    {
        return $this->hasMany(TeamMembers::class, 'team_id', 'id');
    }
}
