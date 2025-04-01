<?php

namespace Database\Seeders;

use App\Models\EventContentTimeline;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventContentTimelineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $event_content_timelines = [
            [
                'event_content_id' => 1,
                'title' => 'Coming soon',
                'start_date' => '2024-08-01 00:00:00',
                'end_date' => '2024-08-07 23:59:59',
                'date_range' => 'Coming soon',
                'description' => '',
            ],
            [
                'event_content_id' => 2,
                'title' => 'Coming soon',
                'start_date' => '2024-08-08 00:00:00',
                'end_date' => '2024-08-14 23:59:59',
                'date_range' => 'Coming soon',
                'description' => '',
            ],
            [
                'event_content_id' => 3,
                'title' => 'Coming soon',
                'start_date' => '2024-08-15 00:00:00',
                'end_date' => '2024-08-21 23:59:59',
                'date_range' => 'Coming soon',
                'description' => '',
            ],
        ];

        foreach($event_content_timelines as $event_content_timeline)
        {
            EventContentTimeline::create($event_content_timeline);
        }
    }
}
