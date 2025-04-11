<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CompetitionPriceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'periode_name' => $this->periode_name,
            'price' => $this->price,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date
        ];
    }
}
