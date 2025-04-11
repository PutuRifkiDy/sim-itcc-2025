<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CompetitionContentResource extends JsonResource
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
            'location' => $this->location,
            'how_to_join_link' => $this->how_to_join_link,
            'guidebook_link' => $this->guidebook_link,
            'competition_content_contact' => CompetitionContentContact::collection($this->competition_content_contact),
            'competition_content_prizes' => CompetitionContentPrizes::collection($this->competition_content_prizes),
            'competition_content_timeline' => CompetitionContentTimeline::collection($this->competition_content_timeline),
            'competition_content_faq' => CompetitionContentFaq::collection($this->competition_content_faq),
        ];
    }
}
