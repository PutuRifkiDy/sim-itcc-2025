<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetitionContentContactPerson extends Model
{
    use HasFactory;

    protected $fillable = [
        'competition_content_id',
        'name',
        'id_line',
        'wa_number',
    ];
}
