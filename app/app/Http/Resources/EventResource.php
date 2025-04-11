<?php

namespace App\Http\Resources;

use App\Http\Resources\EventContent;
use App\Http\Resources\EventPrices;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'kode' => $this->kode,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'category' => $this->category,
            'is_open_regis' => $this->is_open_regis,
            'event_type' => $this->event_type,
            'event_prices' => EventPrices::collection($this->event_prices),
            'event_content' => EventContent::collection($this->event_content),
        ];
    }
}
