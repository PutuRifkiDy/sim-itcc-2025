<?php

namespace Database\Seeders;

use App\Models\Merchandise;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MerchandiseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $merchandises = [
            [
                'name' => 'T-Shirt ITCC 2025',
                'slug' => 't-shirt-itcc-2025',
                'price' => 100000,
                'image_path' => '/assets/images/merchandise/merch_tshirt_back.png',
                'description' => 'Official Merchandise ITCC kembali hadir dengan T-Shirt ITCC 2025.',
                'batch_name' => 'Pre-Order Batch I',
                'start_date' => '2025-06-03 16:00:00',
                'end_date' => '2025-09-04 15:59:59',
            ],
            [
                'name' => 'Fan ITCC 2025',
                'slug' => 'fan-itcc-2025',
                'price' => 15000,
                'image_path' => '/assets/images/merchandise/merch_fan_front.png',
                'description' => 'Official Merchandise ITCC kembali hadir dengan Kipas ITCC 2025',
                'batch_name' => 'Pre-Order Batch I',
                'start_date' => '2025-06-03 16:00:00',
                'end_date' => '2025-09-04 15:59:59',
            ],
            [
                'name' => 'Keychan ITCC 2025',
                'slug' => 'keychan-itcc-2025',
                'price' => 15000,
                'image_path' => '/assets/images/merchandise/merch_keychan.png',
                'description' => 'Official Merchandise ITCC kembali hadir dengan Keychan ITCC 2025',
                'batch_name' => 'Pre-Order Batch I',
                'start_date' => '2025-06-03 16:00:00',
                'end_date' => '2025-09-04 15:59:59',
            ],
        ];

        foreach ($merchandises as $merchandise)
        {
            Merchandise::create($merchandise);
        }
    }
}
