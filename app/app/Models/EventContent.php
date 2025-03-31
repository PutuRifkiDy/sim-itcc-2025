<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EventContent extends Model
{
    protected $fillable = [
        'event_id',
        'location',
        'how_to_join_link',
        'guidebook_link'
    ];
}
