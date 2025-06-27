<?php
namespace Database\Seeders;

use App\Models\CompetitionContent;
use Illuminate\Database\Seeder;

class CompetitionContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $competition_contents = [
            [
                'competition_id'   => '1',
                'location'         => 'Online',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://drive.google.com/file/d/1geiD9GmFW-suDWB--cgpSc5d6G1OGI2T/view?usp=sharing',
            ],
            [
                'competition_id'   => '2',
                'location'         => 'Online',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://itcc.hmtiudayana.id/coming-soon',
            ],
            [
                'competition_id'   => '3',
                'location'         => 'Semi-Offline',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://drive.google.com/file/d/1tPTn4cIR_bRDy5pCfa9CVqezYN_Smyd4/view?usp=sharing',
            ],
            [
                'competition_id'   => '4',
                'location'         => 'Online',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://drive.google.com/file/d/1NsSIRd7c-PR4Zc2NOnZBVl5q7BOV2cAt/view?usp=sharing',
            ],
            [
                'competition_id'   => '5',
                'location'         => 'Semi-Offline',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://drive.google.com/file/d/1BM-Ct7g7104Y-c-L_SVAVP-xvAJlkieZ/view?usp=drive_link',
            ],
            [
                'competition_id'   => '6',
                'location'         => 'Online',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://itcc.hmtiudayana.id/coming-soon',
            ],
            [
                'competition_id'   => '7',
                'location'         => 'Offline',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://drive.google.com/file/d/1yTwXkeWvqQFimznis5woRqUrzTtbPh0-/view?usp=sharing',
            ],
            [
                'competition_id'   => '8',
                'location'         => 'Online',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://drive.google.com/file/d/1okwV-M5U6YxKAViU-SnYLt3ayg_bXIft/view?usp=sharing',
            ],
            [
                'competition_id'   => 9,
                'location'         => 'Semi-Offline',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://drive.google.com/file/d/1okwV-M5U6YxKAViU-SnYLt3ayg_bXIft/view?usp=sharing',
            ],
            [
                'competition_id'   => 10,
                'location'         => 'Online',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://drive.google.com/drive/folders/1xB4ELL6xZc70YtebdyQXBkT6cTJ5k1X8?usp=sharing',
            ],
            [
                'competition_id'   => 11,
                'location'         => 'Online',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://drive.google.com/drive/folders/1SR8xUyvpefDjrJqwJy6ktrpciFqaoWi2?usp=sharing',
            ],
        ];

        foreach ($competition_contents as $competition_content) {
            CompetitionContent::create($competition_content);
        }
    }
}
