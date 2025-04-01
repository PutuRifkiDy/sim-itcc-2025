<?php

namespace App\Models;

use App\Enums\SubmissionStatus;
use Illuminate\Database\Eloquent\Model;
use App\Models\CompetitionRegistrations;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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

    public function competition_registrations(): BelongsTo
    {
        return $this->belongsTo(CompetitionRegistrations::class);
    }
}
