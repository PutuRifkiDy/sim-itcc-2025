<?php
namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TeamMembersResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'                        => $this->id,
            'team_id'                   => $this->team_id,
            'teams'                     => new TeamResource($this->teams),
            'competition_registrations' => new CompetitionRegistrationResource($this->competition_registrations),
        ];
    }
}
