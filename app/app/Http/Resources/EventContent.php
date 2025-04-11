<?php

namespace App\Http\Resources;

use App\Http\Resources\EventContentTimeline;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventContent extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'location' => $this->location,
            'how_to_join_link' => $this->how_to_join_link,
            'guidebook_link' => $this->guidebook_link,
            'event_content_timeline' => EventContentTimeline::collection($this->event_content_timeline),
            'event_content_faq' => EventContentFaq::collection($this->event_content_faq),
            'event_content_contact' => EventContentContactPerson::collection($this->event_content_contact),
        ];
    }
}
