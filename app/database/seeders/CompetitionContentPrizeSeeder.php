<?php
namespace Database\Seeders;

use App\Models\CompetitionContentPrize;
use Illuminate\Database\Seeder;

class CompetitionContentPrizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $competition_content_prizes = [
            [
                'competition_content_id' => '1',
                'rank'                   => 1,
                'money'                  => 1750000,
                'additional'             => '+ (Sertifikat dan Piala)',
            ],
            [
                'competition_content_id' => '1',
                'rank'                   => 2,
                'money'                  => 1250000,
                'additional'             => '+ (Sertifikat dan Piala)',
            ],
            [
                'competition_content_id' => '1',
                'rank'                   => 3,
                'money'                  => 750000,
                'additional'             => '+ (Sertifikat dan Piala)',
            ],
            [
                'competition_content_id' => '1',
                'rank'                   => 4,
                'name'                   => 'Juara Favorit',
                'money'                  => 400000,
                'additional'             => '+ Sertifikat',
            ],
            [
                'competition_content_id' => '2',
                'rank'                   => 1,
                'money'                  => 1000000,
                'additional'             => 'Sertifikat',
            ],
            [
                'competition_content_id' => '2',
                'rank'                   => 2,
                'money'                  => 500000,
                'additional'             => 'Sertifikat',
            ],
            [
                'competition_content_id' => '2',
                'rank'                   => 3,
                'money'                  => 250000,
                'additional'             => 'Sertifikat',
            ],
            [
                'competition_content_id' => '3',
                'rank'                   => 1,
                'money'                  => 1000000,
                'additional'             => '+ (Sertifikat dan Piala)',
            ],
            [
                'competition_content_id' => '3',
                'rank'                   => 2,
                'money'                  => 750000,
                'additional'             => '+ (Sertifikat dan Piala)',
            ],
            [
                'competition_content_id' => '3',
                'rank'                   => 3,
                'money'                  => 500000,
                'additional'             => '+ (Sertifikat dan Piala)',
            ],
            [
                'competition_content_id' => '4',
                'rank'                   => 1,
                "money"                  => 1000000,
                "additional"             => "+ (Sertifikat dan Piala)",
            ],
            [
                'competition_content_id' => '4',
                'rank'                   => 2,
                "money"                  => 750000,
                "additional"             => "+ (Sertifikat dan Piala)",
            ],
            [
                'competition_content_id' => '4',
                'rank'                   => 3,
                "money"                  => 500000,
                "additional"             => "+ (Sertifikat dan Piala)",
            ],
            [
                'competition_content_id' => '5',
                'rank'                   => 1,
                "money"                  => 1000000,
                "additional"             => "+ (Sertifikat dan Plakat)",
            ],
            [
                'competition_content_id' => '5',
                'rank'                   => 2,
                "money"                  => 750000,
                "additional"             => "+ (Sertifikat dan Plakat)",
            ],
            [
                'competition_content_id' => '5',
                'rank'                   => 3,
                "money"                  => 500000,
                "additional"             => "+ (Sertifikat dan Plakat)",
            ],
            [
                'competition_content_id' => '6',
                'rank'                   => 1,
                "money"                  => 1000000,
                "additional"             => "Sertifikat",
            ],
            [
                'competition_content_id' => '6',
                'rank'                   => 2,
                "money"                  => 500000,
                "additional"             => "Sertifikat",
            ],
            [
                'competition_content_id' => '6',
                'rank'                   => 3,
                "money"                  => 250000,
                "additional"             => "Sertifikat",
            ],
            [
                'competition_content_id' => '7',
                'rank'                   => 1,
                "money"                  => 1200000,
                "additional"             => "+ (Piala dan Sertifikat)",
            ],
            [
                'competition_content_id' => '7',
                'rank'                   => 2,
                "money"                  => 900000,
                "additional"             => "+ (Piala dan Sertifikat)",
            ],
            [
                'competition_content_id' => '7',
                'rank'                   => 3,
                "money"                  => 700000,
                "additional"             => "+ (Piala dan Sertifikat)",
            ],
            [
                'competition_content_id' => '8',
                'rank'                   => 1,
                "money"                  => 1750000,
                "additional"             => "+ (Piala dan Sertifikat)",
            ],
            [
                'competition_content_id' => '8',
                'rank'                   => 2,
                "money"                  => 1250000,
                "additional"             => "+ (Piala dan Sertifikat)",
            ],
            [
                'competition_content_id' => '8',
                'rank'                   => 3,
                "money"                  => 750000,
                "additional"             => "+ (Piala dan Sertifikat)",
            ],
            [
                'competition_content_id' => '8',
                'rank'                   => 4,
                "name"                   => "Juara Favorit",
                "money"                  => 400000,
                "additional"             => "+ Sertifikat",
            ],
            [
                'competition_content_id' => '9',
                'rank'                   => 1,
                "money"                  => 1200000,
                "additional"             => "+ (Piala dan Sertifikat)",
            ],
            [
                'competition_content_id' => '9',
                'rank'                   => 2,
                "money"                  => 900000,
                "additional"             => "+ (Piala dan Sertifikat)",
            ],
            [
                'competition_content_id' => '9',
                'rank'                   => 3,
                "money"                  => 700000,
                "additional"             => "+ (Piala dan Sertifikat)",
            ],
            [
                'competition_content_id' => '9',
                'rank'                   => 4,
                "name"                   => "Juara Favorit",
                "money"                  => 250000,
                "additional"             => "+ Sertifikat",
            ],
            [
                'competition_content_id' => '10',
                'rank'                   => 1,
                "money"                  => 500000,
                "additional"             => "+ (Sertifikat dan Piala)",
            ],
            [
                'competition_content_id' => '10',
                'rank'                   => 2,
                "money"                  => 400000,
                "additional"             => "+ (Sertifikat dan Piala)",
            ],
            [
                'competition_content_id' => '10',
                'rank'                   => 3,
                "money"                  => 300000,
                "additional"             => "+ (Sertifikat dan Piala)",
            ],
            [
                'competition_content_id' => '11',
                'rank'                   => 1,
                "money"                  => 600000,
                "additional"             => "+ (Sertifikat dan Piala)",
            ],
            [
                'competition_content_id' => '11',
                'rank'                   => 2,
                "money"                  => 500000,
                "additional"             => "+ (Sertifikat dan Piala)",
            ],
            [
                'competition_content_id' => '11',
                'rank'                   => 3,
                "money"                  => 400000,
                "additional"             => "+ (Sertifikat dan Piala)",
            ],
        ];

        foreach ($competition_content_prizes as $competition_content_prize) {
            CompetitionContentPrize::create($competition_content_prize);
        }
    }
}
