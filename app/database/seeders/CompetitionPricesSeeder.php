<?php

namespace Database\Seeders;

use App\Models\CompetitionPrices;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompetitionPricesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $competition_prices = [
            [
                'competition_id' => '1',
                'competition_category_id' => '5',
                'periode_name' => 'Ide Bisnis TIK Batch I',
                'price' => 130000,
                'start_date' => '2025-03-01 16:00:00.000',
                'end_date' => '2025-03-30 15:59:59.000'
            ],
            [
                'competition_id' => '1',
                'competition_category_id' => '5',
                'periode_name' => 'Ide Bisnis TIK Batch II',
                'price' => 150000,
                'start_date' => '2025-03-30 16:00:00.000',
                'end_date' => '2025-04-30 15:59:59.000',
            ],
            [
                'competition_id' => '2',
                'competition_category_id' => '5',
                'periode_name' => 'Mobile Apps Development Batch I',
                'price' => 0,
                'start_date' => '2025-03-01 16:00:00.000',
                'end_date' => '2025-03-30 15:59:59.000',
            ],
            [
                'competition_id' => '2',
                'competition_category_id' => '5',
                'periode_name' => 'Mobile Apps Development Batch II',
                'price' => 0,
                'start_date' => '2025-03-30 16:00:00.000',
                'end_date' => '2025-04-30 15:59:59.000',
            ],
            [
                'competition_id' => '3',
                'competition_category_id' => '4',
                'periode_name' => 'Web Design SMA/SMK Batch I',
                'price' => 65000,
                'start_date' => '2025-03-01 16:00:00.000',
                'end_date' => '2025-03-30 15:59:59.000',
            ],
            [
                'competition_id' => '3',
                'competition_category_id' => '4',
                'periode_name' => 'Web Design SMA/SMK Batch II',
                'price' => 80000,
                'start_date' => '2025-03-30 16:00:00.000',
                'end_date' => '2025-04-30 15:59:59.000',
            ],
            [
                'competition_id' => '4',
                'competition_category_id' => '5',
                'periode_name' => 'Web Design Mahasiswa Batch I',
                'price' => 80000,
                'start_date' => '2025-03-01 16:00:00.000',
                'end_date' => '2025-03-30 15:59:59.000',
            ],
            [
                'competition_id' => '4',
                'competition_category_id' => '5',
                'periode_name' => 'Web Design Mahasiswa Batch II',
                'price' => '95000',
                'start_date' => '2025-03-30 16:00:00.000',
                'end_date' => '2025-04-30 15:59:59.000',
            ],
            [
                'competition_id' => '5',
                'competition_category_id' => '4',
                'periode_name' => 'Pemrograman SMA/SMK Batch I',
                'price' => 60000,
                'start_date' => '2025-03-01 16:00:00.000',
                'end_date' => '2025-03-30 15:59:59.000',
            ],
            [
                'competition_id' => '5',
                'competition_category_id' => '4',
                'periode_name' => 'Pemrograman SMA/SMK Batch II',
                'price' => 75000,
                'start_date' => '2025-03-30 16:00:00.000',
                'end_date' => '2025-04-30 15:59:59.000',
            ],
            [
                'competition_id' => '6',
                'competition_category_id' => '3',
                'periode_name' => 'Kids Game Programming SD/SMP Registration',
                'price' => 0,
                'start_date' => '2025-03-30 16:00:00.000',
                'end_date' => '2025-04-30 15:59:59.000',
            ],
            [
                'competition_id' => '7',
                'competition_category_id' => '4',
                'periode_name' => 'LCC SMA/SMK Batch I',
                'price' => 125000,
                'start_date' => '2025-03-01 16:00:00.000',
                'end_date' => '2025-03-30 15:59:59.000'
            ],
            [
                'competition_id' => '7',
                'competition_category_id' => '4',
                'periode_name' => 'LCC SMA/SMK Batch II',
                'price' => 140000,
                'start_date' => '2025-03-30 16:00:00.000',
                'end_date' => '2025-04-30 15:59:59.000',
            ],
            [
                'competition_id' => '8',
                'competition_category_id' => '5',
                'periode_name' => 'UI/UX Mahasiswa Batch I',
                'price' => 100000,
                'start_date' => '2025-03-01 16:00:00.000',
                'end_date' => '2025-03-30 15:59:59.000',
            ],
            [
                'competition_id' => '8',
                'competition_category_id' => '5',
                'periode_name' => 'UI/UX Mahasiswa Batch II',
                'price' => 115000,
                'start_date' => '2025-03-30 16:00:00.000',
                'end_date' => '2025-04-30 15:59:59.000',
            ],
            [
                'competition_id' => '9',
                'competition_category_id' => '4',
                'periode_name' => 'UI/UX SMA/SMK Batch I',
                'price' => 80000,
                'start_date' => '2025-03-01 16:00:00.000',
                'end_date' => '2025-03-30 15:59:59.000',
            ],
            [
                'competition_id' => '9',
                'competition_category_id' => '4',
                'periode_name' => 'UI/UX SMA/SMK Batch II',
                'price' => 95000,
                'start_date' => '2025-03-30 16:00:00.000',
                'end_date' => '2025-04-30 15:59:59.000',
            ],
            [
                'competition_id' => '10',
                'competition_category_id' => '1',
                'periode_name' => 'Kids Game Programming Beginner Batch I',
                'price' => 50000,
                'start_date' => '2025-03-01 16:00:00.000',
                'end_date' => '2025-03-30 15:59:59.000',
            ],
            [
                'competition_id' => '10',
                'competition_category_id' => '1',
                'periode_name' => 'Kids Game Programming Beginner Batch II',
                'price' => 50000,
                'start_date' => '2025-03-30 16:00:00.000',
                'end_date' => '2025-04-30 15:59:59.000',
            ],
            [
                'competition_id' => '11',
                'competition_category_id' => '2',
                'periode_name' => 'Kids Game Programming Intermediate Batch I',
                'price' => 50000,
                'start_date' => '2025-03-01 16:00:00.000',
                'end_date' => '2025-03-30 15:59:59.000',
            ],
            [
                'competition_id' => '11',
                'competition_category_id' => '2',
                'periode_name' => 'Kids Game Programming Intermediate Batch II',
                'price' => 50000,
                'start_date' => '2025-03-30 16:00:00.000',
                'end_date' => '2025-04-30 15:59:59.000',
            ]
        ];

        foreach ($competition_prices as $competition_price) {
            CompetitionPrices::create($competition_price);
        }
    }
}
