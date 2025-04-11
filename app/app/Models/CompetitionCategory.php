<?php

namespace App\Models;

use App\Models\Competitions;
use App\Models\CompetitionPrices;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CompetitionCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'category_name'
    ];


    public function competitions(): HasMany
    {
        return $this->hasMany(Competitions::class);
    }

    public function competition_prices(): HasMany
    {
        return $this->hasMany(CompetitionPrices::class);
    }
}
