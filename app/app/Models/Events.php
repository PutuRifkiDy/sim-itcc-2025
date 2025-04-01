<?php

namespace App\Models;

use App\Models\EventPrices;
use App\Models\EventContent;
use App\Models\EventRegistrations;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Events extends Model
{
    use HasFactory;

    protected $fillable = [
        'kode',
        'name',
        'slug',
        'description',
        'category',
        'is_open_regis',
    ];

    public function event_prices(): HasMany
    {
        return $this->hasMany(EventPrices::class);
    }

    public function event_registrations(): HasMany
    {
        return $this->hasMany(EventRegistrations::class);
    }

    public function event_content(): HasMany
    {
        return $this->hasMany(EventContent::class);
    }
}
