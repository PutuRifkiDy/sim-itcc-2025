<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\EventResource;

class EventRegistrationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'event_id'          => $this->event_id,
            'user_id'           => $this->user_id,
            'code_registration' => $this->code_registration,
            'payment_proof_path' => $this->payment_proof_path,
            'total_payment'     => $this->total_payment,
            'payment_status'    => $this->payment_status,
            'reject_reason'     => $this->reject_reason,
            'events' => new EventResource($this->events),
            'user' => new UserSingleResource($this->user),
        ];
    }
}
