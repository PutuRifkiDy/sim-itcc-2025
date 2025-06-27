<?php
namespace Database\Seeders;

use App\Models\EventContentTimeline;
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
                'title'            => 'Coming soon',
                'start_date'       => '2024-08-01 00:00:00',
                'end_date'         => '2024-08-07 23:59:59',
                'date_range'       => 'Coming soon',
                'description'      => '',
            ],
            [
                'event_content_id' => 2,
                'title'            => 'Pre Sale 1',
                'start_date'       => '2025-08-31 16:00:00', // '2025-07-31 16:00:00',
                'end_date'         => '2025-09-15 15:59:59', // '2025-08-15 15:59:59',
                'date_range'       => '1 - 15 September 2025',
                'description'      => '',
            ],
            [
                'event_content_id' => 2,
                'title'            => 'Pre Sale 2',
                'start_date'       => '2025-09-15 16:00:00',
                'end_date'         => '2025-10-04 15:59:59',
                'date_range'       => '16 September - 4 Oktober 2025',
                'description'      => '',
            ],
            [
                'event_content_id' => 2,
                'title'            => 'Perpanjangan Pendaftaran',
                'start_date'       => '2025-10-04 16:00:00',
                'end_date'         => '2025-10-10 15:59:59',
                'date_range'       => '5 - 10 Oktober 2025',
                'description'      => '',
            ],
            [
                'event_content_id' => 2,
                'title'            => 'Hari H Seminar Nasional',
                'start_date'       => '2025-10-17 16:00:00',
                'end_date'         => '2025-10-18 15:59:59',
                'date_range'       => '18 Oktober 2025',
                'description'      => '',
            ],

            [
                'event_content_id' => 3,
                'title'            => 'Pre Sale 1',
                'start_date'       => '2025-08-31 16:00:00', // '2025-07-31 16:00:00',
                'end_date'         => '2025-09-15 15:59:59', // '2025-08-15 15:59:59',
                'date_range'       => '1 - 15 September 2025',
                'description'      => '',
            ],
            [
                'event_content_id' => 3,
                'title'            => 'Pre Sale 2',
                'start_date'       => '2025-09-15 16:00:00',
                'end_date'         => '2025-10-04 15:59:59',
                'date_range'       => '16 September - 4 Oktober 2025',
                'description'      => '',
            ],
            [
                'event_content_id' => 3,
                'title'            => 'Perpanjangan Pendaftaran',
                'start_date'       => '2025-10-04 16:00:00',
                'end_date'         => '2025-10-10 15:59:59',
                'date_range'       => '5 - 10 Oktober 2025',
                'description'      => '',
            ],
            [
                'event_content_id' => 3,
                'title'            => 'Hari H Seminar Nasional',
                'start_date'       => '2025-10-17 16:00:00',
                'end_date'         => '2025-10-18 15:59:59',
                'date_range'       => '18 Oktober 2025',
                'description'      => '',
            ],
        ];

        foreach ($event_content_timelines as $event_content_timeline) {
            EventContentTimeline::create($event_content_timeline);
        }
    }
}
