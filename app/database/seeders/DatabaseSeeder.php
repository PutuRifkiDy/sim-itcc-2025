<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\CompetitionsSeeder;
use Database\Seeders\CompetitionPricesSeeder;
use Database\Seeders\CompetitionContentSeeder;
use Database\Seeders\CompetitionCategoriesSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call([
            CompetitionCategoriesSeeder::class,
            CompetitionsSeeder::class,
            CompetitionPricesSeeder::class,
            CompetitionContentSeeder::class,
            CompetitionContentPrizeSeeder::class,
            CompetitionContentTimelineSeeder::class,
            CompetitionContentFaqSeeder::class,
            CompetitionContentContactSeeder::class,
            EventsSeeder::class,
            EventPricesSeeder::class,
            EventContentSeeder::class,
            EventContentTimelineSeeder::class
        ]);
    }
}
