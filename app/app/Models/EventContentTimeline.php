<?php

namespace App\Models;

use App\Models\EventContent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EventContentTimeline extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_content_id',
        'title',
        'start_date',
        'end_date',
        'date_range',
        'description'
    ];

    public function event_content(): BelongsTo
    {
        return $this->belongsTo(EventContent::class);
    }
}
