<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class UserSingleResource extends JsonResource
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
            'email' => $this->email,
            'status' => $this->status,
            'line_id' => $this->line_id,
            'phone_number' => $this->phone_number,
            'institution' => $this->institution,
            'institution_path' => Storage::url($this->institution_path),
            'address' => $this->address,
            'already_filled' => $this->already_filled   
        ];
    }
}
