<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SubmissionResource extends JsonResource
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
            'competition_registration_id' => $this->competition_registration_id,
            'submission_link' => $this->submission_link,
            'submission_status' => $this->submission_status,
            'reject_reason' => $this->reject_reason,
            'competition_registrations' => new CompetitionRegistrationResource($this->competition_registrations),
        ];
    }
}
