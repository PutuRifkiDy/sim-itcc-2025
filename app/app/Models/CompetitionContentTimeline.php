<?php

namespace App\Models;

use App\Models\CompetitionContent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CompetitionContentTimeline extends Model
{
    use HasFactory;

    protected $fillable = [
        'competition_content_id',
        'title',
        'start_date',
        'end_date',
        'date_range',
        'description',
    ];
    public function competition_content(): BelongsTo
    {
        return $this->belongsTo(CompetitionContent::class);
    }
}
