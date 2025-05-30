<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MerchandiseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'price' => $this->price,
            'image_path' => $this->image_path,
            'description' => $this->description,
            'batch_name' => $this->batch_name,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date
        ];
    }
}
