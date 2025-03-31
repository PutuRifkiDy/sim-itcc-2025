<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventContentFaq extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_content_id',
        'question',
        'answer'
    ];
}
