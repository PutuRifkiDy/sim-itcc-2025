<?php

namespace Database\Seeders;

use App\Models\EventContentContactPerson;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventContentContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $event_content_contacts = [
            [
                'event_content_id' => 1,
                'name' => 'Coming soon',
                'id_line' => '',
                'wa_number' => '62',
            ],
            [
                'event_content_id' => 1,
                'name' => 'Coming soon',
                'id_line' => '',
                'wa_number' => '62',
            ],
            [
                'event_content_id' => 1,
                'name' => 'Coming soon',
                'id_line' => '',
                'wa_number' => '62',
            ],
            [
                'event_content_id' => 2,
                'name' => 'Coming soon',
                'id_line' => '',
                'wa_number' => '62',
            ],
            [
                'event_content_id' => 2,
                'name' => 'Coming soon',
                'id_line' => '',
                'wa_number' => '62',
            ],
            [
                'event_content_id' => 2,
                'name' => 'Coming soon',
                'id_line' => '',
                'wa_number' => '62',
            ],
            [
                'event_content_id' => 3,
                'name' => 'Coming soon',
                'id_line' => '',
                'wa_number' => '62',
            ],
            [
                'event_content_id' => 3,
                'name' => 'Coming soon',
                'id_line' => '',
                'wa_number' => '62',
            ],
            [
                'event_content_id' => 3,
                'name' => 'Coming soon',
                'id_line' => '',
                'wa_number' => '62',
            ],
        ];

        foreach($event_content_contacts as $event_content_contact)
        {
            EventContentContactPerson::create($event_content_contact);
        }
    }
}
