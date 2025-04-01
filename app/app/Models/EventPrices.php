<?php

namespace App\Models;

use App\Models\Events;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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

    public function events(): BelongsTo
    {
        return $this->belongsTo(Events::class);
    }

}
