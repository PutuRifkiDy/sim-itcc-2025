<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Merchandise extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'price',
        'image_path',
        'description',
        'batch_name',
        'start_date',
        'end_date',
    ];

    protected $table = 'merchandise';
}
