<?php

namespace App\Models;

use App\Models\Teams;
use App\Models\CompetitionPrices;
use App\Models\CompetitionContent;
use App\Models\CompetitionCategory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CompetitionRegistrations;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Competitions extends Model
{
    use HasFactory;

    protected $fillable = [
        'kode',
        'name',
        'slug',
        'description',
        'is_team',
        'is_need_submission',
        'is_open_regis',
        'competition_category_id',
    ];

    public function competition_categories(): BelongsTo
    {
        return $this->belongsTo(CompetitionCategory::class);
    }

    public function competition_prices(): HasMany
    {
        return $this->hasMany(CompetitionPrices::class);
    }

    public function competition_content(): HasMany
    {
        return $this->hasMany(CompetitionContent::class);
    }

    public function competition_registrations(): HasMany
    {
        return $this->hasMany(CompetitionRegistrations::class);
    }

    public function teams(): HasMany
    {
        return $this->hasMany(Teams::class);
    }
}
