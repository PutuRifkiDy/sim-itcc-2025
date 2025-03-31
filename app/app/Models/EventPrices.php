<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventPrices extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'periode_name',
        'price',
        'start_date',
        'end_date',
    ];
}
