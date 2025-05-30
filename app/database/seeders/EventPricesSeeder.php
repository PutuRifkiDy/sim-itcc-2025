<?php
namespace Database\Seeders;

use App\Models\EventPrices;
use Illuminate\Database\Seeder;

class EventPricesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $event_prices = [
            [
                'periode_name' => "Workshop P'Cozzy Batch I",
                'price'        => 0,
                'start_date'   => '2024-07-31 16:00:00',
                'end_date'     => '2024-08-20 15:59:59',
                'event_id'     => 1,
            ],
            [
                'periode_name' => "Workshop P'Cozzy Batch II",
                'price'        => 0,
                'start_date'   => '2024-08-20 16:00:00',
                'end_date'     => '2024-09-20 15:59:59',
                'event_id'     => 1,
            ],
            [
                'periode_name' => "Semnas Online Batch I",
                'price'        => 70000,
                'start_date'   => '2025-05-31 00:01:00.000',
                'end_date'     => '2025-06-10 23:59:59.000',
                'event_id'     => 2,
            ],
            [
                'periode_name' => "Semnas Online Batch II",
                'price'        => 85000,
                'start_date'   => '2025-06-11 00:01:00.000',
                'end_date'     => '2025-06-20 23:59:59.000',
                'event_id'     => 2,
            ],
            [
                'periode_name' => "Semnas Online OTS",
                'price'        => 100000,
                'start_date'   => '2024-08-20 16:00:00',
                'end_date'     => '2024-09-20 15:59:59',
                'event_id'     => 2,
            ],
            [
                'periode_name' => "Semnas Offline Batch I",
                'price'        => 100000,
                'start_date'   => '2025-05-31 00:01:00.000',
                'end_date'     => '2025-06-10 23:59:59.000',
                'event_id'     => 3,
            ],
            [
                'periode_name' => "Semnas Offline Batch II",
                'price'        => 115000,
                'start_date'   => '2025-06-11 00:01:00.000',
                'end_date'     => '2025-06-20 23:59:59.000',
                'event_id'     => 3,
            ],
            [
                'periode_name' => "Semnas Offline OTS",
                'price'        => 130000,
                'start_date'   => '2024-08-20 16:00:00',
                'end_date'     => '2024-09-20 15:59:59',
                'event_id'     => 3,
            ],
        ];

        foreach ($event_prices as $event_price) {
            EventPrices::create($event_price);
        }
    }
}
