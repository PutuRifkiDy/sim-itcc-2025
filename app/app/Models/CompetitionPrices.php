<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetitionPrices extends Model
{
    use HasFactory;

    protected $fillable = [
        'competition_id',
        'competition_category_id',
        'periode_name',
        'price',
        'start_date',
        'end_date',
    ];
}
