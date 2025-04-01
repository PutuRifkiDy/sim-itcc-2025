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
                'name' => 'T-Shirt ITCC 2024',
                'slug' => 't-shirt-itcc-2024',
                'price' => 100000,
                'image_path' => 'https://firebasestorage.googleapis.com/v0/b/nutres...',
                'description' => 'Official Merchandise ITCC kembali hadir dengan T-Shirt ITCC 2024.',
                'batch_name' => 'Pre-Order Batch I',
                'start_date' => '2024-07-14 16:00:00',
                'end_date' => '2024-09-04 15:59:59',
            ],
            [
                'name' => 'Totebag ITCC 2024',
                'slug' => 'totebag-itcc-2024',
                'price' => 40000,
                'image_path' => 'https://firebasestorage.googleapis.com/v0/b/nutres...',
                'description' => 'Official Merchandise ITCC kembali hadir dengan Totebag ITCC 2024.',
                'batch_name' => 'Pre-Order Batch I',
                'start_date' => '2024-07-14 16:00:00',
                'end_date' => '2024-09-04 15:59:59',
            ],
        ];

        foreach ($merchandises as $merchandise)
        {
            Merchandise::create($merchandise);
        }
    }
}
