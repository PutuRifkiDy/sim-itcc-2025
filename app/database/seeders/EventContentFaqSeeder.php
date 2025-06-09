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
                'question'         => 'Apakah rekaman seminar akan tersedia?',
                'answer'           => 'Ya, rekaman seminar akan disediakan dan dibagikan setelah acara selesai.',
            ],
            [
                'event_content_id' => 2,
                'question'         => 'Apakah ada kesempatan lain untuk membeli tiket jika saya terlewat?',
                'answer'           => 'Ya, Anda bisa membeli tiket secara langsung (OTS) di Gedung Undagi Graha, Jimbaran, pada 18 Oktober. Harga tiket OTS adalah Rp100.000. Jangan sampai terlewat lagi!',
            ],
            [
                'event_content_id' => 2,
                'question'         => 'Apakah saya akan mendapatkan materi atau slide presentasi?',
                'answer'           => 'Ya, materi atau slide presentasi dari pembicara akan dibagikan kepada peserta setelah seminar selesai. Informasi detail mengenai cara aksesnya akan diumumkan di akhir acara.',
            ],
            [
                'event_content_id' => 3,
                'question'         => 'Apakah rekaman seminar akan tersedia?',
                'answer'           => 'Ya, rekaman seminar akan disediakan dan dibagikan setelah acara selesai.',
            ],
            [
                'event_content_id' => 3,
                'question'         => 'Apakah ada kesempatan lain untuk membeli tiket jika saya terlewat?',
                'answer'           => 'Ya, Anda bisa membeli tiket secara langsung (OTS) di Gedung Undagi Graha, Jimbaran, pada 18 Oktober. Harga tiket OTS adalah Rp100.000. Jangan sampai terlewat lagi!',
            ],
            [
                'event_content_id' => 3,
                'question'         => 'Apakah saya akan mendapatkan materi atau slide presentasi?',
                'answer'           => 'Ya, materi atau slide presentasi dari pembicara akan dibagikan kepada peserta setelah seminar selesai. Informasi detail mengenai cara aksesnya akan diumumkan di akhir acara.',
            ],

        ];

        foreach ($event_content_faqs as $event_content_faq) {
            EventContentFaq::create($event_content_faq);
        }
    }
}
