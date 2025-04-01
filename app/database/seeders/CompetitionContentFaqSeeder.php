<?php

namespace Database\Seeders;

use App\Models\CompetitionContentFaq;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompetitionContentFaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $competition_content_faqs = [
            [
                'competition_content_id' => 1,
                'answer' => 'Coming soon.',
                'question' => 'Where is the actual FAQ?'
            ],
            [
                'competition_content_id' => 2,
                'answer' => 'Coming soon.',
                'question' => 'Where is the actual FAQ?'
            ],
            [
                'competition_content_id' => 3,
                'answer' => 'Coming soon.',
                'question' => 'Where is the actual FAQ?'
            ],
            [
                'competition_content_id' => 4,
                'answer' => 'Coming soon.',
                'question' => 'Where is the actual FAQ?'
            ],
            [
                'competition_content_id' => 5,
                'answer' => 'Coming soon.',
                'question' => 'Where is the actual FAQ?'
            ],
            [
                'competition_content_id' => 6,
                'answer' => 'Coming soon.',
                'question' => 'Where is the actual FAQ?'
            ],
            [
                'competition_content_id' => 7,
                'answer' => 'Coming soon.',
                'question' => 'Where is the actual FAQ?'
            ],
            [
                'competition_content_id' => 8,
                'answer' => 'Coming soon.',
                'question' => 'Where is the actual FAQ?'
            ],
            [
                'competition_content_id' => 9,
                'answer' => 'Coming soon.',
                'question' => 'Where is the actual FAQ?'
            ],
            [
                'competition_content_id' => 10,
                'answer' => 'Coming soon.',
                'question' => 'Where is the actual FAQ?'
            ],
            [
                'competition_content_id' => 11,
                'answer' => 'Coming soon.',
                'question' => 'Where is the actual FAQ?'
            ],
        ];

        foreach ($competition_content_faqs as $competition_content_faq)
        {
            CompetitionContentFaq::create($competition_content_faq);
        }
    }
}
