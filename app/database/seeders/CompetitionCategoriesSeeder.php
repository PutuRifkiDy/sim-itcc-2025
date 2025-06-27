<?php
namespace Database\Seeders;

use App\Models\CompetitionCategory;
use Illuminate\Database\Seeder;

class CompetitionCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $competition_categories = [
            [
                'category_name' => 'SD',
            ],
            [
                'category_name' => 'SMP',
            ],
            [
                'category_name' => 'SD/SMP',
            ],
            [
                'category_name' => 'SMASMK',
            ],
            [
                'category_name' => 'Mahasiswa',
            ],
            [
                'category_name' => 'Umum',
            ],
            [
                'category_name' => 'Mahasiswa/Umum',
            ],
            [
                'category_name' => 'SMP/SMASMK',
            ]
        ];

        foreach ($competition_categories as $category) {
            CompetitionCategory::create($category);
        }

    }
}
