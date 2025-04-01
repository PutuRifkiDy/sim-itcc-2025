<?php

namespace App\Models;

use App\Models\Competitions;
use App\Models\CompetitionContentFaq;
use App\Models\CompetitionContentPrize;
use Illuminate\Database\Eloquent\Model;
use App\Models\CompetitionContentTimeline;
use App\Models\CompetitionContentContactPerson;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CompetitionContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'competition_id',
        'location',
        'how_to_join_link',
        'guidebook_link',
    ];

    protected $table = 'competition_content';

    public function competitions(): BelongsTo
    {
        return $this->belongsTo(Competitions::class);
    }

    public function competition_content_prizes(): HasMany
    {
        return $this->hasMany(CompetitionContentPrize::class);
    }

    public function competition_content_timeline(): HasMany
    {
        return $this->hasMany(CompetitionContentTimeline::class);
    }

    public function competition_content_faq(): HasMany
    {
        return $this->hasMany(CompetitionContentFaq::class);
    }

    public function competition_content_contact(): HasMany
    {
        return $this->hasMany(CompetitionContentContactPerson::class);
    }
}
