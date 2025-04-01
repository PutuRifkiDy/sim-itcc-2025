<?php

namespace App\Models;

use App\Models\CompetitionContent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CompetitionContentPrize extends Model
{
    use HasFactory;

    protected $fillable = [
        'competition_content_id',
        'rank',
        'price',
        'additional',
    ];

    public function competition_content(): BelongsTo
    {
        return $this->belongsTo(CompetitionContent::class);
    }
}
