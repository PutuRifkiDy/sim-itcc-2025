<?php

namespace App\Models;

use App\Enums\SubmissionStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Submissions extends Model
{
    use HasFactory;

    protected $fillable = [
        'competition_registration_id',
        'submission_link',
        'submission_status',
        'reject_reason'
    ];

    protected function casts(): array
    {
        return [
            'submission_status' => SubmissionStatus::class
        ];
    }
}
