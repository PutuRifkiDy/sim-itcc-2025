<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetitionContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'competition_id',
        'location',
        'how_to_join_link',
        'guidebook_link',
    ];
}
