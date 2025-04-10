<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CompetitionResource extends JsonResource
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
            'competition_category_id' => $this->competition_category_id,
            'name' => $this->name,
            'kode' => $this->kode,
            'slug' => $this->slug,
            'description' => $this->description,
            'is_team' => $this->is_team,
            'is_need_submission' => $this->is_need_submission,
            'is_open_regis' => $this->is_open_regis,
        ];
    }
}
