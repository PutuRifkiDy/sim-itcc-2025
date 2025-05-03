<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use App\Http\Resources\TeamMembersResource;
use Illuminate\Http\Resources\Json\JsonResource;

class TeamResource extends JsonResource
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
            'leader_id' => $this->leader_id,
            'team_name' => $this->team_name,
            'token' => $this->token,
            'team_members' => TeamMembersResource::collection($this->whenLoaded('team_members')),
        ];
    }
}
