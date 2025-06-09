<?php
namespace Database\Seeders;

use App\Models\Events;
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
                'category'      => 'SD',
                'kode'          => 'WPCZY',
                'name'          => "Workshop P'Cozzy",
                'slug'          => 'workshop-pcozzy',
                'description'   => "P'Cozzy is an acronym from Play Coding Easily that purposes to invite youngsters from Elementary Schools and  to learn and play programming using the Scratch Platform.",
                'is_open_regis' => false,
                'event_type'    => 'workshop',
            ],
            [
                'category'      => 'Mahasiswa/UMUM',
                'kode'          => 'SMNTION',
                'name'          => "Seminar Nasional Information Technology Creative Competition",
                'slug'          => 'seminar-nasional-teknologi-informasi-on',
                'description'   => 'The 2025 ITCC National Seminar is one of a series of the 2025 Information Technology Creative Competition (ITCC) which aims to provide knowledge about information technology to people. This year we have the theme "Data is Power: Reinventing Cybersecurity for the Next Digital Frontier" which highlights the importance of data as a key asset in the digital era.
',
                'is_open_regis' => true,
                'event_type'    => 'semnas',
            ],
            [
                'category'      => 'Mahasiswa/UMUM',
                'kode'          => 'SMNTIOF',
                'name'          => "Seminar Nasional Information Technology Creative Competition",
                'slug'          => 'seminar-nasional-teknologi-informasi-of',
                'description'   => 'The 2025 ITCC National Seminar is one of a series of the 2025 Information Technology Creative Competition (ITCC) which aims to provide knowledge about information technology to people. This year we have the theme "Data is Power: Reinventing Cybersecurity for the Next Digital Frontier" which highlights the importance of data as a key asset in the digital era.
',
                'is_open_regis' => true,
                'event_type'    => 'semnas',
            ],
        ];

        foreach ($events as $event) {
            Events::create($event);
        }
    }
}
