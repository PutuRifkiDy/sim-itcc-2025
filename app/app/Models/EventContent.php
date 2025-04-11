<?php

namespace App\Models;

use App\Models\Events;
use App\Models\EventContentFaq;
use App\Models\EventContentTimeline;
use Illuminate\Database\Eloquent\Model;
use App\Models\EventContentContactPerson;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EventContent extends Model
{
    protected $fillable = [
        'event_id',
        'location',
        'how_to_join_link',
        'guidebook_link'
    ];

    protected $table = 'event_content';

    public function events(): BelongsTo
    {
        return $this->belongsTo(Events::class);
    }

    public function event_content_timeline(): HasMany
    {
        return $this->hasMany(EventContentTimeline::class, 'event_content_id', 'id');
    }

    public function event_content_faq(): HasMany
    {
        return $this->hasMany(EventContentFaq::class, 'event_content_id', 'id');
    }

    public function event_content_contact(): HasMany
    {
        return $this->hasMany(EventContentContactPerson::class, 'event_content_id', 'id');
    }
}
