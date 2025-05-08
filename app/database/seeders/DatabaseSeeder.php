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
            EventContentTimelineSeeder::class,
            EventContentFaqSeeder::class,
            EventContentContactSeeder::class,
            MerchandiseSeeder::class,
            PaymentMethodsSeeder::class,
            RoleSeeder::class
        ]);

        User::create([
            'email' => 'adminKesekre@gmail.com',
            'name' => 'Admin Kesekre',
            'password' => bcrypt('adminKesekreITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        User::create([
            'email' => 'adminPemrograman@gmail.com',
            'name' => 'Admin Pemrograman',
            'password' => bcrypt('adminPemrogramanITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        User::create([
            'email' => 'adminWebDesignSMASMK@gmail.com',
            'name' => 'Admin Web Design SMASMK',
            'password' => bcrypt('adminWebDesignSMASMKITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
    }
}
