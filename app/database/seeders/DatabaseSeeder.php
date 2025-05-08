<?php
namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Database\Seeders\CompetitionCategoriesSeeder;
use Database\Seeders\CompetitionContentSeeder;
use Database\Seeders\CompetitionPricesSeeder;
use Database\Seeders\CompetitionsSeeder;
use Illuminate\Database\Seeder;

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
            RoleSeeder::class,
        ]);

        User::create([
            'email'             => 'adminKesekre@gmail.com',
            'name'              => 'Admin Kesekre',
            'password'          => bcrypt('adminKesekreITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        User::create([
            'email'             => 'adminIdeBisnis@gmail.com',
            'name'              => 'Admin Ide Bisnis',
            'password'          => bcrypt('adminIdeBisnisITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        User::create([
            'email'             => 'adminWebDesignSMASMK@gmail.com',
            'name'              => 'Admin Web Design SMASMK',
            'password'          => bcrypt('adminWebDesignSMASMKITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        User::create([
            'email'             => 'adminWebDesignMahasiswa@gmail.com',
            'name'              => 'Admin Web Design Mahasiswa',
            'password'          => bcrypt('adminWebDesignMahasiswaITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        User::create([
            'email'             => 'adminPemrograman@gmail.com',
            'name'              => 'Admin Pemrograman',
            'password'          => bcrypt('adminPemrogramanITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        User::create([
            'email'             => 'adminKidsGameProgramming@gmail.com',
            'name'              => 'Admin KidsGameProgramming',
            'password'          => bcrypt('adminKidsGameProgrammingITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        User::create([
            'email'             => 'adminCerdasCermat@gmail.com',
            'name'              => 'Admin CerdasCermat',
            'password'          => bcrypt('adminCerdasCermatITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        User::create([
            'email'             => 'adminUIUXMahasiswa@gmail.com',
            'name'              => 'Admin UIUXMahasiswa',
            'password'          => bcrypt('adminUIUXMahasiswaITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        User::create([
            'email'             => 'adminUIUXSMASMK@gmail.com',
            'name'              => 'Admin UIUXSMASMK',
            'password'          => bcrypt('adminUIUXSMASMKITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        User::create([
            'email'             => 'adminKidsGameProgrammingBeginner@gmail.com',
            'name'              => 'Admin KidsGameProgrammingBeginner',
            'password'          => bcrypt('adminKidsGameProgrammingBeginnerITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        User::create([
            'email'             => 'adminKidsGameProgrammingIntermediate@gmail.com',
            'name'              => 'Admin KidsGameProgrammingIntermediate',
            'password'          => bcrypt('adminKidsGameProgrammingIntermediateITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
    }
}
