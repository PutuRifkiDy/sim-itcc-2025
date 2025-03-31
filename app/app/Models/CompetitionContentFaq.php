<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetitionContentFaq extends Model
{
    use HasFactory;

    protected $fillable = [
        'competition_content_id',
        'answer',
        'question',
    ];
}
