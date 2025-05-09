<?php
namespace App\Http\Resources;

use App\Http\Resources\CompetitionResource;
use App\Http\Resources\UserSingleResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class CompetitionRegistrationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'                 => $this->id,
            'user_id'            => $this->user_id,
            'competition_id'     => $this->competition_id,
            'team_id'            => $this->team_id,
            'code_registration'  => $this->code_registration,
            'payment_proof_path' => Storage::url($this->payment_proof_path),
            'total_payment'      => number_format($this->total_payment),
            'payment_status'     => $this->payment_status,
            'reject_reason'      => $this->reject_reason,
            'competitions'       => new CompetitionResource($this->competitions),
            'user'               => new UserSingleResource($this->user),
            'teams'              => new TeamResource($this->teams),
        ];
    }
}
