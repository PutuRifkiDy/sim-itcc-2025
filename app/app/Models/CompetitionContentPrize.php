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
        'name',
        'money',
        'additional',
    ];

    protected $table = 'competition_content_prize';

    public function competition_content(): BelongsTo
    {
        return $this->belongsTo(CompetitionContent::class);
    }
}
