<?php

namespace App\Models;

use App\Models\EventContent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EventContentFaq extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_content_id',
        'question',
        'answer'
    ];

    protected $table = 'event_content_faq';

    public function event_content(): BelongsTo
    {
        return $this->belongsTo(EventContent::class);
    }
}
