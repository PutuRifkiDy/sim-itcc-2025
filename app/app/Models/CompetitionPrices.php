<?php

namespace App\Models;

use App\Models\Competitions;
use App\Models\CompetitionCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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

    public function competitions(): BelongsTo
    {
        return $this->belongsTo(Competitions::class);
    }

    public function competition_categories(): BelongsTo
    {
        return $this->belongsTo(CompetitionCategory::class);
    }
}
