<?php

namespace Database\Seeders;

use App\Models\EventContent;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $event_contents = [
            [
                'event_id' => 1,
                'location' => 'Online',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link' => 'https://itcc.hmtiudayana.id/coming-soon',
            ],
            [
                'event_id' => 2,
                'location' => 'Online',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link' => 'https://itcc.hmtiudayana.id/coming-soon',
            ],
            [
                'event_id' => 3,
                'location' => 'Offline',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link' => 'https://itcc.hmtiudayana.id/coming-soon',
            ],
        ];

        foreach($event_contents as $event_content)
        {
            EventContent::create($event_content);
        }
    }
}
