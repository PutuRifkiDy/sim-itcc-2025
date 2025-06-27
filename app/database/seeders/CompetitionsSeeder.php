<?php
namespace Database\Seeders;

use App\Models\Competitions;
use Illuminate\Database\Seeder;

class CompetitionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $competitions = [
            [
                'competition_category_id' => '5',
                'kode'                    => 'IBTIK',
                'name'                    => 'ICT Business Idea',
                'slug'                    => 'ide-bisnis',
                'description'             => 'The ICT Business Idea Competition is one of the competitive events organized by the Student Association of Information Technology under the Faculty of Engineering, Udayana University. This event is part of the Information Technology Creative Competition (ITCC) series, aiming to inspire the Indonesian public to develop business ideas based on modern technology. The competition is open to university students from all over Indonesia. Each participant must form a team consisting of a minimum of two and a maximum of three members. In this competition, teams will compete by presenting innovative and highly creative business ideas that leverage advancements in information technology.',
                'is_team'                 => true,
                'is_need_submission'      => true,
                'is_open_regis'           => true,
                'icon_path'               => "assets/images/competition/ideBisnisLogo.png",
                'end_submission'          => '2025-08-31 15:59:59.000',
            ],
            [
                'competition_category_id' => '5',
                'kode'                    => 'MAD',
                'name'                    => 'Mobile Apps Development',
                'slug'                    => 'mobile-apps-development',
                'description'             => 'Mobile Apps Development Competition is to expose the creativity from the contestant to develop a new idea and solution to solve the problem that we always face in Indonesia in the mobile type application which is Android and iOS',
                'is_team'                 => false,
                'is_need_submission'      => false,
                'is_open_regis'           => false,
                'icon_path'               => "assets/images/competition/mobileAppsLogo.png",
                'end_submission'          => '2025-08-31 15:59:59.000',
            ],
            [
                'competition_category_id' => '4',
                'kode'                    => 'WD1',
                'name'                    => 'Web Design SMA/SMK',
                'slug'                    => 'web-design-smasmk',
                'description'             => 'ITCC Web Design Competition is one of the national scale competitions in ITCC 2025 activities organized by the Information Technology Student Association, Faculty of Engineering, Udayana University. This competition is individual and aimed at high school / vocational students and active students throughout Indonesia to express their ideas, creativity, and innovation, and present new breakthroughs in the form of web page design.',
                'is_team'                 => false,
                'is_need_submission'      => true,
                'is_open_regis'           => true,
                'icon_path'               => "assets/images/competition/webDesignLogo.png",
                'end_submission'          => '2025-08-31 15:59:59.000',
            ],
            [
                'competition_category_id' => '5',
                'kode'                    => 'WD2',
                'name'                    => 'Web Design Mahasiswa',
                'slug'                    => 'web-design-mahasiswa',
                'description'             => 'ITCC Web Design Competition is one of the national scale competitions in ITCC 2025 activities organized by the Information Technology Student Association, Faculty of Engineering, Udayana University. This competition is individual and aimed at active students at universities throughout Indonesia to express their ideas, creativity, and innovation, and present new breakthroughs in the form of web page design.',
                'is_team'                 => false,
                'is_need_submission'      => true,
                'is_open_regis'           => true,
                'icon_path'               => "assets/images/competition/webDesignLogo.png",
                'end_submission'          => '2025-08-31 15:59:59.000',
            ],
            [
                'competition_category_id' => '8',
                'kode'                    => 'P1',
                'name'                    => 'Pemrograman',
                'slug'                    => 'pemrograman',
                'description'             => 'Programming Competition is one of the competitions at the SMA/SMK equivalent level in the annual ITCC competition held by the Information Technology Student Association, Faculty of Engineering, Udayana University. Programming competition aims to explore the potential of SMA/SMK equivalent level throughout Indonesia in the computer field, especially in the field of computational logic and programming algorithms.',
                'is_team'                 => false,
                'is_need_submission'      => false,
                'is_open_regis'           => true,
                'icon_path'               => "assets/images/competition/pemrogramanLogo.png",
                'end_submission'          => '2025-08-31 15:59:59.000',
            ],
            [
                'competition_category_id' => '3',
                'kode'                    => 'KGP',
                'name'                    => 'Kids Game Programming',
                'slug'                    => 'kids-game-programming',
                'description'             => 'The Kids Game Programming Competition is one of the national competition options in the 2024 ITCC activities organized by the Information Technology Student Association of the Faculty of Engineering, Udayana University. This competition aims to provide opportunities for children to develop their creativity in making interactive games. This competition consists of Beginner (Elementary School) and Intermediate (Junior High School) categories. They will learn visual programming and use platforms such as Scratch 3.0, Construct 3, Phaser, and so on to design their in-game environments, characters, and challenges.',
                'is_team'                 => false,
                'is_need_submission'      => false,
                'is_open_regis'           => false,
                'icon_path'               => "assets/images/competition/kgpLogo.png",
                'end_submission'          => '2025-08-31 15:59:59.000',
            ],
            [
                'competition_category_id' => '4',
                'kode'                    => 'LCC',
                'name'                    => 'Cerdas Cermat',
                'slug'                    => 'cerdas-cermat',
                'description'             => 'The Information Technology Quiz Competition for senior high school/vocational school students is one of the competition categories in the ITCC 2025, aiming to assess participants skills in the field of information technology. The competition consists of three stages: preliminary, semifinal, and final, each with different rules and challenges, designed to test the participants’ logic, speed of thinking, and understanding of the IT world in a competitive atmosphere.',
                'is_team'                 => true,
                'is_need_submission'      => false,
                'is_open_regis'           => true,
                'icon_path'               => "assets/images/competition/lccLogo.png",
                'end_submission'          => '2025-08-31 15:59:59.000',
            ],
            [
                'competition_category_id' => '5',
                'kode'                    => 'UIUX1',
                'name'                    => 'UI/UX Mahasiswa',
                'slug'                    => 'uiux-mahasiswa',
                'description'             => 'UI UX competition or often known as User Interface and User Experience is one of the competitions at ITCC which has high school / vocational level and student level competition categories where the ITCC annual competition is held and organized by the Udayana University Information Technology Student Association. This UI UX competition aims to attract participants both at the high school / vocational level and students who have high creativity and focus on designing interface systems that are comfortable and user friendly when used.',
                'is_team'                 => true,
                'is_need_submission'      => true,
                'is_open_regis'           => true,
                'icon_path'               => "assets/images/competition/UIUXLogo.png",
                'end_submission'          => '2025-08-31 15:59:59.000',
            ],
            [
                'competition_category_id' => '4',
                'kode'                    => 'UIUX2',
                'name'                    => 'UI/UX SMASMK',
                'slug'                    => 'uiux-smasmk',
                'description'             => 'UI UX competition or often known as User Interface and User Experience is one of the competitions at ITCC which has high school / vocational level and student level competition categories where the ITCC annual competition is held and organized by the Udayana University Information Technology Student Association. This UI UX competition aims to attract participants both at the high school / vocational level and students who have high creativity and focus on designing interface systems that are comfortable and user friendly when used.',
                'is_team'                 => true,
                'is_need_submission'      => true,
                'is_open_regis'           => true,
                'icon_path'               => "assets/images/competition/UIUXLogo.png",
                'end_submission'          => '2025-08-31 15:59:59.000',
            ],
            [
                'competition_category_id' => '1',
                'kode'                    => 'KGP1',
                'name'                    => 'Kids Game Programming Beginner',
                'slug'                    => 'kids-game-programming-beginner',
                'description'             => 'The Kids Game Programming Competition is one of the national competition options in the 2025 ITCC activities organized by the Information Technology Student Association of the Faculty of Engineering, Udayana University. This competition aims to provide opportunities for children to develop their creativity in making interactive games. This competition consists of Beginner (Elementary School) and Intermediate (Elementary School/Junior High School) categories. They will learn about visual programming and use platforms such as Scratch 3.0 for Beginner and Intermediate, and Roblox Studio for Intermediate to design environments, characters, and challenges in their games.',
                'is_team'                 => false,
                'is_need_submission'      => true,
                'is_open_regis'           => true,
                'icon_path'               => "assets/images/competition/kgpLogo.png",
                'end_submission'          => '2025-08-31 15:59:59.000',
            ],
            [
                'competition_category_id' => '3',
                'kode'                    => 'KGP2',
                'name'                    => 'Kids Game Programming Intermediate',
                'slug'                    => 'kids-game-programming-intermediate',
                'description'             => 'The Kids Game Programming Competition is one of the national competition options in the 2025 ITCC activities organized by the Information Technology Student Association of the Faculty of Engineering, Udayana University. This competition aims to provide opportunities for children to develop their creativity in making interactive games. This competition consists of Beginner (Elementary School) and Intermediate (Elementary School/Junior High School) categories. They will learn about visual programming and use platforms such as Scratch 3.0 for Beginner and Intermediate, and Roblox Studio for Intermediate to design environments, characters, and challenges in their games.',
                'is_team'                 => false,
                'is_need_submission'      => true,
                'is_open_regis'           => true,
                'icon_path'               => "assets/images/competition/kgpLogo.png",
                'end_submission'          => '2025-08-31 15:59:59.000',
            ],
        ];

        foreach ($competitions as $competition) {
            Competitions::create($competition);
        }
    }
}
