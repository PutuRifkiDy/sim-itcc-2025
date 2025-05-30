<?php
namespace Database\Seeders;

use App\Models\CompetitionContentFaq;
use Illuminate\Database\Seeder;

class CompetitionContentFaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $competition_content_faqs = [
            [
                'competition_content_id' => 1,
                'answer'                 => 'Iya, 100% online! Mulai dari pengumpulan BMC sampai final presentasi semua dilakukan daring. Kamu bisa ikut dari mana aja, asal koneksi internet lancar.',
                'question'               => 'Jadi lombanya full online ya?',
            ],
            [
                'competition_content_id' => 1,
                'answer'                 => 'Yup, betul ada yang beda nih! Tahun ini kita ingin mengikuti tren digital. Makanya, tahun ini peserta cukup bikin video iklan singkat yang menjelaskan ide bisnisnya. Lebih simpel, bisa kreatif, dan menjangkau lebih banyak orang secara online!',
                'question'               => 'Tahun lalu kan pakai poster di expo, kalau tahun ini apakah sama atau ada yang beda?',
            ],
            [
                'competition_content_id' => 1,
                'answer'                 => 'Nah, lombanya memang khusus buat mahasiswa aktif aja. Jadi, biar bisa ikut, kamu perlu melampirkan KTM atau surat keterangan dari kampus waktu daftar. Tenang aja, nggak ribet kok—asal masih aktif kuliah, pasti bisa ikut!',
                'question'               => 'Pesertanya wajib mahasiswa atau bisa diikuti oleh umum?',
            ],
            [
                'competition_content_id' => 2,
                'answer'                 => 'Coming soon.',
                'question'               => 'Where is the actual FAQ?',
            ],
            [
                'competition_content_id' => 3,
                'answer'                 => 'Penggunaan framework tidak diperkenaankan. Plugins yang dapat digunakan sesuai dengan list plugins yang sudah ditentukan panitia',
                'question'               => 'Untuk lomba web design apa boleh menggunakan Framework? Seperti ReactJS atau lainnya?',
            ],
            [
                'competition_content_id' => 3,
                'answer'                 => 'Tidak bisa. Babak final akan diadakan secara offline di Gedung Program Studi Teknologi Informasi, Fakultas Teknik, Universitas Udayana.',
                'question'               => 'Jika saya dari luar Bali dan lolos ke babak final, apakah saya bisa mengikuti babak final secara online?',
            ],
            [
                'competition_content_id' => 3,
                'answer'                 => 'Yang harus dikumpulkan yaitu Source code, asset yang digunakan di dalam website, dan screenshoot halaman website. Untuk website peserta tidak perlu melakukan di hosting pribadi, karena panitia akan hosting untuk keperluan penilaian.',
                'question'               => 'Apa saja yang harus dikumpulkan pada babak penyisihan dan apakah website harus dihosting ?',
            ],
            [
                'competition_content_id' => 4,
                'answer'                 => 'Penggunaan framework tidak diperkenaankan. Plugins yang dapat digunakan sesuai dengan list plugins yang sudah ditentukan panitia',
                'question'               => 'Untuk lomba web design apa boleh menggunakan Framework? Seperti ReactJS atau lainnya?',
            ],
            [
                'competition_content_id' => 4,
                'answer'                 => 'Untuk Mahasiswa babak final akan dilaksanakan secara online, tidak seperti SMA/K yang dilakukan secara offline.',
                'question'               => 'Babak final dilakukan secara online atau offline seperti SMA/K Sederajat?',
            ],
            [
                'competition_content_id' => 4,
                'answer'                 => 'Yang harus dikumpulkan yaitu Source code, asset yang digunakan di dalam website, dan screenshoot halaman website. Untuk website peserta tidak perlu melakukan di hosting pribadi, karena panitia akan hosting untuk keperluan penilaian.',
                'question'               => 'Apa saja yang harus dikumpulkan pada babak penyisihan dan apakah website harus dihosting ?',
            ],
            [
                'competition_content_id' => 5,
                'answer'                 => 'Siswa yang sedang berada di bangku SMA/K Sederajat.',
                'question'               => 'Siapa saja yang boleh mengikuti lomba pemrograman?',
            ],
            [
                'competition_content_id' => 5,
                'answer'                 => 'Boleh, selama hari penyelenggaran lomba tersebut tidak bertabrakan dengan lomba pemrograman.',
                'question'               => 'Apakah boleh mengikuti lomba lain selagi mengikuti lomba pemrograman?',
            ],
            [
                'competition_content_id' => 5,
                'answer'                 => 'Ya, lomba pemrograman dirancang dengan materi yang masih dalam cakupan dasar seperti logika matematika, algoritma, perulangan, rekursif, dan sorting. Peserta pemula yang sudah belajar dasar-dasar pemrograman dan logika komputasi masih bisa menyelesaikan permasalahan dengan baik.	',
                'question'               => 'Apakah lomba pemrograman ramah pemula?',
            ],
            [
                'competition_content_id' => 6,
                'answer'                 => 'Coming soon.',
                'question'               => 'Where is the actual FAQ?',
            ],
            [
                'competition_content_id' => 7,
                'answer'                 => 'LCC ITCC adalah lomba yang menguji pengetahuan peserta dalam bidang tertentu secara cepat, tepat, dan kompetitif antar tim.',
                'question'               => 'Apa itu Lomba Cerdas Cermat (LCC) ITCC?',
            ],
            [
                'competition_content_id' => 7,
                'answer'                 => '3 orang per tim.',
                'question'               => 'Berapa jumlah anggota untuk tiap tim?',
            ],
            [
                'competition_content_id' => 7,
                'answer'                 => 'Algoritma dan pemrograman, konsep basis data, jaringan komputer dasar, arsitektur komputer, website dasar, dan pengetahuan umum terkait teknologi informasi dan STEM, serta konsep dasar AI (Artificial Intelligence). Materi bersifat umum seputar Teknologi Informasi untuk kategori SMA/SMK sederajat.',
                'question'               => 'Materi apa saja yang diuji?',
            ],
            [
                'competition_content_id' => 8,
                'answer'                 => 'Untuk mekanisme perlombaan akan dimulai dari penyisihan yang bersifat online dan final yang akan bersifat online',
                'question'               => 'Bagaimana mekanisme lomba akan berjalan?',
            ],
            [
                'competition_content_id' => 8,
                'answer'                 => 'Peserta diwajibkan untuk mengumpulkan proposal dan wireframe dari aplikasi yang akan dibuat',
                'question'               => 'Apa saja yang dikumpulkan pada saat penyisihan?',
            ],
            [
                'competition_content_id' => 8,
                'answer'                 => 'Untuk di final perseta akan melakukan presentasi dan juga menunjukan prototipe secara online',
                'question'               => 'Bagaimana mekanisme finalnya?',
            ],
            [
                'competition_content_id' => 9,
                'answer'                 => 'Untuk mekanisme perlombaan akan dimulai dari penyisihan yang bersifat online dan final yang akan bersifat offline',
                'question'               => 'Bagaimana mekanisme lomba akan berjalan?',
            ],
            [
                'competition_content_id' => 9,
                'answer'                 => 'Peserta diwajibkan untuk mengumpulkan proposal dan wireframe dari aplikasi yang akan dibuat',
                'question'               => ' Apa saja yang dikumpulkan pada saat penyisihan?',
            ],
            [
                'competition_content_id' => 9,
                'answer'                 => 'Untuk di final perseta SMA/K akan melakukan presentasi dan juga menunjukan prototipe secara langsung di hadapan juri',
                'question'               => 'Bagaimana mekanisme finalnya?',
            ],
            [
                'competition_content_id' => 10,
                'answer'                 => 'Game Engine yang dapat digunakan adalah Scratch dan Roblox Studio.',
                'question'               => 'Apa saja Game Engine yang bisa digunakan dalam lomba Kids Game Programming?',
            ],
            [
                'competition_content_id' => 10,
                'answer'                 => 'Yang akan menjadi aspek penilaian dari proyek peserta, mencakup beberapa elemen seperti Sprite, Backdrop, Script, proyek secara keseluruhan, deskripsi proyek, serta penggunaan musik atau efek suara. Dan kemudian, kreativitas dalam merancang dan membuat program juga menjadi poin penting. Untuk informasi lebih rinci, dapat mengacu pada guidebook yang tersedia.',
                'question'               => 'Apa saja aspek Penilaian dari lomba Kids Game Programming?',
            ],
            [
                'competition_content_id' => 10,
                'answer'                 => 'Tentu, lomba Kids Game Programming tidak mengharuskan peserta yang ikut harus jago dalam membuat game. Lomba Kids Game Programming bisa menjadi pengalaman pertama bagi para peserta dalam membuat game dengan Game Engine berupa Scratch dan Roblox Studio.',
                'question'               => 'Apakah lomba Kids Game Programming ini, bisa diikuti meskipun belum mempunyai pengalaman dalam membuat game?',
            ],
            [
                'competition_content_id' => 11,
                'answer'                 => 'Game Engine yang dapat digunakan adalah Scratch dan Roblox Studio.',
                'question'               => 'Apa saja Game Engine yang bisa digunakan dalam lomba Kids Game Programming?',
            ],
            [
                'competition_content_id' => 11,
                'answer'                 => 'Yang akan menjadi aspek penilaian dari proyek peserta, mencakup elemen seperti Sprite, Backdrop, Script, proyek secara keseluruhan, deskripsi proyek, serta penggunaan musik atau efek suara. Dan kemudian, kreativitas dalam merancang dan membuat program juga menjadi poin penting. Untuk informasi lebih rinci, dapat mengacu pada guidebook yang tersedia.',
                'question'               => 'Apa saja aspek Penilaian dari lomba Kids Game Programming?',
            ],
            [
                'competition_content_id' => 11,
                'answer'                 => 'Tentu, lomba Kids Game Programming tidak mengharuskan peserta yang ikut harus jago dalam membuat game. Lomba Kids Game Programming bisa menjadi pengalaman pertama bagi para peserta dalam membuat game dengan Game Engine berupa Scratch dan Roblox Studio.',
                'question'               => 'Apakah lomba Kids Game Programming ini, bisa diikuti meskipun belum mempunyai pengalaman dalam membuat game?',
            ],
        ];

        foreach ($competition_content_faqs as $competition_content_faq) {
            CompetitionContentFaq::create($competition_content_faq);
        }
    }
}
