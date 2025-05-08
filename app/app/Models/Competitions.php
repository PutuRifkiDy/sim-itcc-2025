<?php
namespace App\Models;

use App\Models\CompetitionCategory;
use App\Models\CompetitionContent;
use App\Models\CompetitionPrices;
use App\Models\CompetitionRegistrations;
use App\Models\Teams;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

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

    protected $table = 'competitions';

    public function competition_category(): BelongsTo
    {
        return $this->belongsTo(CompetitionCategory::class, 'competition_category_id', 'id');
    }

    public function competition_prices(): HasMany
    {
        return $this->hasMany(CompetitionPrices::class, 'competition_id', 'id');
    }

    public function competition_content(): HasMany
    {
        return $this->hasMany(CompetitionContent::class, 'competition_id', 'id');
    }

    public function competition_registrations(): HasMany
    {
        return $this->hasMany(CompetitionRegistrations::class, 'competition_id', 'id');
    }

    public function teams(): HasMany
    {
        return $this->hasMany(Teams::class, 'competition_id', 'id');
    }

    public function admins()
    {
        return $this->belongsToMany(User::class, 'admin_competition');
    }
}
