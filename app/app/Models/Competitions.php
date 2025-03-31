<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Competitions extends Model
{
    use HasFactory;

    protected $fillable = [
        'kode',
        'name',
        'slug',
        'description',
        'is_team',
        'is_need_submission',
        'is_open_regis',
        'competition_category_id',
    ];
}
