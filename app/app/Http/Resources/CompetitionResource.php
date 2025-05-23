<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\CompetitionContentResource;
use App\Http\Resources\CompetitionCategoryResource;

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
            'icon_path' => $this->icon_path,
            'competition_content' => CompetitionContentResource::collection($this->competition_content),
            'competition_category' => new CompetitionCategoryResource($this->competition_category),
            'competition_prices' => CompetitionPriceResource::collection($this->competition_prices),
        ];
    }
}
