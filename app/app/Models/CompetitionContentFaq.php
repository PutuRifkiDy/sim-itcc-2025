<?php

namespace App\Models;

use App\Models\CompetitionContent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CompetitionContentFaq extends Model
{
    use HasFactory;

    protected $fillable = [
        'competition_content_id',
        'answer',
        'question',
    ];

    protected $table = 'competition_content_faq';

    public function competition_content(): BelongsTo
    {
        return $this->belongsTo(CompetitionContent::class);
    }
}
