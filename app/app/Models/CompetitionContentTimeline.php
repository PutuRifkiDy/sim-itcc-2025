<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
