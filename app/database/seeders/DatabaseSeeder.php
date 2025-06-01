<?php
namespace Database\Seeders;

use App\Models\Competitions;
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
        $adminIdeBisnis = User::create([
            'email'             => 'adminIdeBisnis@gmail.com',
            'name'              => 'Admin Ide Bisnis',
            'password'          => bcrypt('adminIdeBisnisITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        $adminMobileDevelopment = User::create([
            'email'             => 'adminMobileDevelopment@gmail.com',
            'name'              => 'Admin Mobile Development',
            'password'          => bcrypt('adminMobileDevelopmentITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        $adminWebDesignSMASMK = User::create([
            'email'             => 'adminWebDesignSMASMK@gmail.com',
            'name'              => 'Admin Web Design SMASMK',
            'password'          => bcrypt('adminWebDesignSMASMKITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        $adminWebDesignMahasiswa = User::create([
            'email'             => 'adminWebDesignMahasiswa@gmail.com',
            'name'              => 'Admin Web Design Mahasiswa',
            'password'          => bcrypt('adminWebDesignMahasiswaITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        $adminPemrograman = User::create([
            'email'             => 'adminPemrograman@gmail.com',
            'name'              => 'Admin Pemrograman',
            'password'          => bcrypt('adminPemrogramanITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        $adminKidsGameProgramming = User::create([
            'email'             => 'adminKidsGameProgramming@gmail.com',
            'name'              => 'Admin Kids Game Programming',
            'password'          => bcrypt('adminKidsGameProgrammingITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        $adminCerdasCermat = User::create([
            'email'             => 'adminCerdasCermat@gmail.com',
            'name'              => 'Admin Cerdas Cermat',
            'password'          => bcrypt('adminCerdasCermatITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        $adminUIUXMahasiswa = User::create([
            'email'             => 'adminUIUXMahasiswa@gmail.com',
            'name'              => 'Admin UIUX Mahasiswa',
            'password'          => bcrypt('adminUIUXMahasiswaITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        $adminUIUXSMASMK = User::create([
            'email'             => 'adminUIUXSMASMK@gmail.com',
            'name'              => 'Admin UIUX SMASMK',
            'password'          => bcrypt('adminUIUXSMASMKITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        $adminKidsGameProgrammingBeginner = User::create([
            'email'             => 'adminKidsGameProgrammingBeginner@gmail.com',
            'name'              => 'Admin Kids Game Programming Beginner',
            'password'          => bcrypt('adminKidsGameProgrammingBeginnerITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');
        $adminKidsGameProgrammingIntermediate = User::create([
            'email'             => 'adminKidsGameProgrammingIntermediate@gmail.com',
            'name'              => 'Admin Kids Game Programming Intermediate',
            'password'          => bcrypt('adminKidsGameProgrammingIntermediateITCC2025YesWeCan1'),
            'email_verified_at' => now(),
        ])->assignRole('admin');

        $adminIdeBisnis->managed_competitions()->attach(
            Competitions::where('name', 'LIKE', '%ICT Business Idea%')->pluck('id')->toArray(),
        );

        $adminMobileDevelopment->managed_competitions()->attach(
            Competitions::where('name', 'LIKE', '%Mobile Apps Development%')->pluck('id')->toArray(),
        );

        $adminWebDesignSMASMK->managed_competitions()->attach(
            Competitions::where('name', 'LIKE', '%Web Design SMA/SMK%')->pluck('id')->toArray(),
        );

        $adminWebDesignMahasiswa->managed_competitions()->attach(
            Competitions::where('name', 'LIKE', '%Web Design Mahasiswa%')->pluck('id')->toArray(),
        );

        $adminPemrograman->managed_competitions()->attach(
            Competitions::where('name', 'LIKE', '%Pemrograman%')->pluck('id')->toArray(),
        );

        $adminKidsGameProgramming->managed_competitions()->attach(
            Competitions::where('name', 'LIKE', '%Kids Game Programming%')->pluck('id')->toArray(),
        );

        $adminCerdasCermat->managed_competitions()->attach(
            Competitions::where('name', 'LIKE', '%Cerdas Cermat%')->pluck('id')->toArray(),
        );

        $adminUIUXMahasiswa->managed_competitions()->attach(
            Competitions::where('name', 'LIKE', '%UI/UX Mahasiswa%')->pluck('id')->toArray(),
        );

        $adminUIUXSMASMK->managed_competitions()->attach(
            Competitions::where('name', 'LIKE', '%UI/UX SMA/SMK%')->pluck('id')->toArray(),
        );

        $adminKidsGameProgrammingBeginner->managed_competitions()->attach(
            Competitions::where('name', 'LIKE', '%Kids Game Programming Beginner%')->pluck('id')->toArray(),
        );

        $adminKidsGameProgrammingIntermediate->managed_competitions()->attach(
            Competitions::where('name', 'LIKE', '%Kids Game Programming Intermediate%')->pluck('id')->toArray(),
        );
    }
}
