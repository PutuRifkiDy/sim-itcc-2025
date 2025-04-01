<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Teams;
use App\Enums\UserStatus;
use App\Models\EventRegistrations;
use App\Models\CompetitionRegistrations;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'nim',
        'line_id',
        'phone_number',
        'institution',
        'institution_path',
        'address',
        'status',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'status' => UserStatus::class,
        ];
    }

    public function competition_registrations(): HasMany
    {
        return $this->hasMany(CompetitionRegistrations::class);
    }

    public function teams(): HasMany
    {
        return $this->hasMany(Teams::class);
    }

    public function event_registrations(): HasMany
    {
        return $this->hasMany(EventRegistrations::class);
    }
}
