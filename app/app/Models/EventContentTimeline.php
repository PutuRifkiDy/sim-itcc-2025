<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
