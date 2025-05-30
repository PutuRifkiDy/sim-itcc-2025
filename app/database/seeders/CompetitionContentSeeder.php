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
                'guidebook_link'   => 'https://drive.google.com/file/d/1gpNuQSkSava0W9d2pqKs4Pe__zjQOUTw/view?usp=drivesdk',
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
                'guidebook_link'   => 'https://drive.google.com/file/d/1qQb4q5Z2XisyWKFg78G2UornKyTok7GL/view?usp=drivesdk',
            ],
            [
                'competition_id'   => '4',
                'location'         => 'Online',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://drive.google.com/file/d/1uMgngGYez3Vickh20CfBVkAFxkGrOzpf/view?usp=drivesdk',
            ],
            [
                'competition_id'   => '5',
                'location'         => 'Semi-Offline',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://drive.google.com/file/d/1bt6dpZSmobpeUtlEvdsBGof7FlXXikm8/view?usp=drivesdk',
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
                'guidebook_link'   => 'https://drive.google.com/file/d/13G7soQiihSm6C8tmT2OB-O3YjFLyZYtm/view?usp=drivesdk',
            ],
            [
                'competition_id'   => '8',
                'location'         => 'Online',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://drive.google.com/file/d/1Kv3NNVSHkRUXL4PbloPNT8oIm6UuoBEc/view?usp=drive_link',
            ],
            [
                'competition_id'   => 9,
                'location'         => 'Semi-Offline',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://drive.google.com/file/d/1MW9GnshOnbbs5ty_KbOyWTvfAV5EtAZP/view?usp=drive_link',
            ],
            [
                'competition_id'   => 10,
                'location'         => 'Online',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://drive.google.com/file/d/1DpOsMx79OsYHV52pdymfdBzHfyKTHIz4/view?usp=drivesdk',
            ],
            [
                'competition_id'   => 11,
                'location'         => 'Online',
                'how_to_join_link' => 'https://itcc.hmtiudayana.id/coming-soon',
                'guidebook_link'   => 'https://drive.google.com/file/d/1c47sUere9YwCLpqv8XinuteRTSp3bEme/view?usp=drivesdk',
            ],
        ];

        foreach ($competition_contents as $competition_content) {
            CompetitionContent::create($competition_content);
        }
    }
}
