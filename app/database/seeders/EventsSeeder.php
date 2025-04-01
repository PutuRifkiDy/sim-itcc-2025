<?php

namespace Database\Seeders;

use App\Models\Events;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $events = [
            [
                'category' => 'SD',
                'kode' => 'WPCZY',
                'name' => "Workshop P'Cozzy",
                'slug' => 'workshop-pcozzy',
                'description' => "P'Cozzy is an acronym from Play Coding Easily that purposes to invite youngsters from Elementary Schools and  to learn and play programming using the Scratch Platform.",
                'is_open_regis' => true,
                'event_type' => 'workshop',
            ],
            [
                'category' => 'Mahasiswa/UMUM',
                'kode' => 'SMNTION',
                'name' => "Seminar Nasional Teknologi Informasi",
                'slug' => 'seminar-nasional-teknologi-informasi-on',
                'description' => "Seminar Nasional ITCC is purposes in to give the knowledge about technology to the community. This seminar also will give the insight of information technological developments on the world.",
                'is_open_regis' => true,
                'event_type' => 'semnas',
            ],
            [
                'category' => 'Mahasiswa/UMUM',
                'kode' => 'SMNTIOF',
                'name' => "Seminar Nasional Teknologi Informasi",
                'slug' => 'seminar-nasional-teknologi-informasi-of',
                'description' => "Seminar Nasional ITCC is purposes in to give the knowledge about technology to the community. This seminar also will give the insight of information technological developments on the world.",
                'is_open_regis' => true,
                'event_type' => 'semnas',
            ],
        ];

        foreach ($events as $event)
        {
            Events::create($event);
        }
    }
}
