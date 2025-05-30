<?php
namespace Database\Seeders;

use App\Models\EventContentFaq;
use Illuminate\Database\Seeder;

class EventContentFaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $event_content_faqs = [
            [
                'event_content_id' => 1,
                'question'         => 'Where is the actual FAQ?',
                'answer'           => 'Coming soon.',
            ],
            [
                'event_content_id' => 2,
                'question'         => 'How can I participate in the event?',
                'answer'           => 'The registration process will be announced soon.',
            ],
            [
                'event_content_id' => 3,
                'question'         => 'Will there be a recording available?',
                'answer'           => 'Yes, recordings will be available after the event.',
            ],
        ];

        foreach ($event_content_faqs as $event_content_faq) {
            EventContentFaq::create($event_content_faq);
        }
    }
}
