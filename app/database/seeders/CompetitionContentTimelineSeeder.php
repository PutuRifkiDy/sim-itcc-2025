<?php

namespace Database\Seeders;

use App\Models\CompetitionContentTimeline;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompetitionContentTimelineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $competition_content_timelines = [
            [
                'competition_content_id' => '1',
                'title' => 'Pendaftaran Peserta Batch I',
                'end_date' => '2024-08-20 23:59:59',
                'date_range' => '1 Agustus 2024 - 20 Agustus 2024',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '1',
                'title' => 'Pendaftaran Peserta Batch II',
                'end_date' => '2024-09-20 23:59:59',
                'date_range' => '21 Agustus 2024 - 20 September 2024',
                'start_date' => '2024-08-21 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '1',
                'title' => 'Pengumpulan BMC',
                'end_date' => '2024-09-20 23:59:59',
                'date_range' => '1 Agustus 2024 - 20 September 2024',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '1',
                'title' => 'Pengumuman Finalis',
                'end_date' => '2024-10-17 23:59:59',
                'date_range' => '17 Oktober 2024',
                'start_date' => '2024-10-17 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '1',
                'title' => 'Pengumpulan Proposal dan Poster',
                'end_date' => '2024-11-02 23:59:59',
                'date_range' => '20 Oktober 2024 - 2 November 2024',
                'start_date' => '2024-10-20 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '1',
                'title' => 'Expo Poster',
                'end_date' => '2024-11-13 23:59:59',
                'date_range' => '6 November 2024 - 13 November 2024',
                'start_date' => '2024-11-06 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '1',
                'title' => 'Technical Meeting',
                'end_date' => '2024-11-03 23:59:59',
                'date_range' => '3 November 2024',
                'start_date' => '2024-11-03 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '1',
                'title' => 'Hari H Lomba Ide Bisnis ITCC 2024',
                'end_date' => '2024-11-16 23:59:59',
                'date_range' => '16 November 2024',
                'start_date' => '2024-11-16 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '2',
                'title' => 'Coming soon',
                'end_date' => '2024-08-07 23:59:59',
                'date_range' => 'Coming soon',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '3',
                'title' => 'Pendaftaran Peserta Batch I',
                'end_date' => '2024-08-20 23:59:59',
                'date_range' => '1 Agustus 2024 - 20 Agustus 2024',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '3',
                'title' => 'Pendaftaran Peserta Batch II',
                'end_date' => '2024-09-20 23:59:59',
                'date_range' => '21 Agustus 2024 - 20 September 2024',
                'start_date' => '2024-08-21 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '3',
                'title' => 'Pengumpulan Bahan Serta Hasil Karya',
                'end_date' => '2024-09-20 23:59:59',
                'date_range' => '1 Agustus - 20 September 2024',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '3',
                'title' => 'Penyisihan Oleh Dewan Juri',
                'end_date' => '2024-10-11 23:59:59',
                'date_range' => '1 Oktober - 11 Oktober 2024',
                'start_date' => '2024-10-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '3',
                'title' => 'Pengumuman Finalis (10 Orang per Kategori)',
                'end_date' => '2024-10-17 23:59:59',
                'date_range' => '17 Oktober 2024',
                'start_date' => '2024-10-17 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '3',
                'title' => 'Technical Meeting',
                'end_date' => '2024-11-03 23:59:59',
                'date_range' => '3 November 2024',
                'start_date' => '2024-11-03 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '3',
                'title' => 'Final Kategori SMA/SMK Sederajat',
                'end_date' => '2024-11-15 23:59:59',
                'date_range' => '15 November 2024',
                'start_date' => '2024-11-15 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '3',
                'title' => 'Final Kategori Mahasiswa',
                'end_date' => '2024-11-16 23:59:59',
                'date_range' => '16 November 2024',
                'start_date' => '2024-11-16 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '4',
                'title' => 'Pendaftaran Peserta Batch I',
                'end_date' => '2024-08-20 23:59:59',
                'date_range' => '1 Agustus 2024 - 20 Agustus 2024',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '4',
                'title' => 'Pendaftaran Peserta Batch II',
                'end_date' => '2024-09-20 23:59:59',
                'date_range' => '21 Agustus 2024 - 20 September 2024',
                'start_date' => '2024-08-21 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '4',
                'title' => 'Pengumpulan Bahan Serta Hasil Karya',
                'end_date' => '2024-09-20 23:59:59',
                'date_range' => '1 Agustus - 20 September 2024',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '4',
                'title' => 'Penyisihan Oleh Dewan Juri',
                'end_date' => '2024-10-11 23:59:59',
                'date_range' => '1 Oktober - 11 Oktober 2024',
                'start_date' => '2024-10-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '4',
                'title' => 'Pengumuman Finalis (10 Orang per Kategori)',
                'end_date' => '2024-10-17 23:59:59',
                'date_range' => '17 Oktober 2024',
                'start_date' => '2024-10-17 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '4',
                'title' => 'Technical Meeting',
                'end_date' => '2024-11-03 23:59:59',
                'date_range' => '3 November 2024',
                'start_date' => '2024-11-03 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '4',
                'title' => 'Final Kategori SMA/SMK Sederajat',
                'end_date' => '2024-11-15 23:59:59',
                'date_range' => '15 November 2024',
                'start_date' => '2024-11-15 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '4',
                'title' => 'Final Kategori Mahasiswa',
                'end_date' => '2024-11-16 23:59:59',
                'date_range' => '16 November 2024',
                'start_date' => '2024-11-16 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '5',
                'title' => 'Pendaftaran Peserta Batch I',
                'end_date' => '2024-08-20 23:59:59',
                'date_range' => '1 Agustus 2024 - 20 Agustus 2024',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '5',
                'title' => 'Pendaftaran Peserta Batch II',
                'end_date' => '2024-09-20 23:59:59',
                'date_range' => '21 Agustus 2024 - 20 September 2024',
                'start_date' => '2024-08-21 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '5',
                'title' => 'Warm Up Sesi I',
                'end_date' => '2024-08-21 23:59:59',
                'date_range' => '21 Agustus 2024',
                'start_date' => '2024-08-21 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '5',
                'title' => 'Warm Up Sesi II',
                'end_date' => '2024-10-09 23:59:59',
                'date_range' => '09 Oktober 2024',
                'start_date' => '2024-10-09 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '5',
                'title' => 'Technical Meeting Penyisihan',
                'end_date' => '2024-10-11 23:59:59',
                'date_range' => '11 Oktober 2024',
                'start_date' => '2024-10-11 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '5',
                'title' => 'Babak Penyisihan',
                'end_date' => '2024-10-13 23:59:59',
                'date_range' => '13 Oktober 2024',
                'start_date' => '2024-10-13 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '5',
                'title' => 'Pengumuman Finalis',
                'end_date' => '2024-10-17 23:59:59',
                'date_range' => '17 Oktober 2024',
                'start_date' => '2024-10-17 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '5',
                'title' => 'Techinal Meeting Final',
                'end_date' => '2024-11-03 23:59:59',
                'date_range' => '3 November 2024',
                'start_date' => '2024-11-03 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '5',
                'title' => 'Babak Final dan Awarding',
                'end_date' => '2024-11-16 23:59:59',
                'date_range' => '16 November 2024',
                'start_date' => '2024-11-16 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '6',
                'title' => 'Coming soon',
                'end_date' => '2024-08-07 23:59:59',
                'date_range' => 'Coming soon',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '7',
                'title' => 'Pendaftaran Peserta Batch I',
                'end_date' => '2024-08-20 23:59:59',
                'date_range' => '1 Agustus 2024 - 20 Agustus 2024',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '7',
                'title' => 'Pendaftaran Peserta Batch II',
                'end_date' => '2024-09-20 23:59:59',
                'date_range' => '21 Agustus 2024 - 20 September 2024',
                'start_date' => '2024-08-21 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '7',
                'title' => 'Technical Meeting',
                'end_date' => '2024-11-03 23:59:59',
                'date_range' => '3 November 2024',
                'start_date' => '2024-11-03 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '7',
                'title' => 'Babak Penyisihan',
                'end_date' => '2024-11-15 23:59:59',
                'date_range' => '15 November 2024',
                'start_date' => '2024-11-15 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '7',
                'title' => 'Babak Semifinal I dan II',
                'end_date' => '2024-11-15 23:59:59',
                'date_range' => '15 November 2024',
                'start_date' => '2024-11-15 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '7',
                'title' => 'Babak Semifinal III dan IV',
                'end_date' => '2024-11-16 23:59:59',
                'date_range' => '16 November 2024',
                'start_date' => '2024-11-16 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '7',
                'title' => 'Babak Final',
                'end_date' => '2024-11-16 23:59:59',
                'date_range' => '16 November 2024',
                'start_date' => '2024-11-16 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '8',
                'title' => 'Pendaftaran Peserta Batch I',
                'end_date' => '2024-08-20 23:59:59',
                'date_range' => '1 Agustus 2024 - 20 Agustus 2024',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '8',
                'title' => 'Pendaftaran Peserta Batch II',
                'end_date' => '2024-09-20 23:59:59',
                'date_range' => '21 Agustus 2024 - 20 September 2024',
                'start_date' => '2024-08-21 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '8',
                'title' => 'Pengumpulan Proposal Lomba',
                'end_date' => '2024-09-30 23:59:59',
                'date_range' => '1 Agustus - 30 September 2024',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '8',
                'title' => 'Babak Penyisihan: Proses Seleksi Proposal',
                'end_date' => '2024-10-11 23:59:59',
                'date_range' => '1 Oktober - 11 Oktober 2024',
                'start_date' => '2024-10-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '8',
                'title' => 'Pengumuman Finalis',
                'end_date' => '2024-10-17 23:59:59',
                'date_range' => '17 Oktober 2024',
                'start_date' => '2024-10-17 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '8',
                'title' => 'Pengumpulan Video Prototype',
                'end_date' => '2024-11-04 23:59:59',
                'date_range' => '21 Oktober - 4 November 2024',
                'start_date' => '2024-10-21 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '8',
                'title' => 'Technical Meeting',
                'end_date' => '2024-11-03 23:59:59',
                'date_range' => '3 November 2024',
                'start_date' => '2024-11-03 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '8',
                'title' => 'Online Expo On ITCC Tik Tok Official',
                'end_date' => '2024-11-13 23:59:59',
                'date_range' => '6 - 13 November 2024',
                'start_date' => '2024-11-06 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '8',
                'title' => 'Final Kategori SMA/SMK',
                'end_date' => '2024-11-15 23:59:59',
                'date_range' => '15 November 2024',
                'start_date' => '2024-11-15 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '8',
                'title' => 'Final Kategori Mahasiswa',
                'end_date' => '2024-11-16 23:59:59',
                'date_range' => '16 November 2024',
                'start_date' => '2024-11-16 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '8',
                'title' => 'Pengumuman Juara',
                'end_date' => '2024-11-16 23:59:59',
                'date_range' => '16 November 2024',
                'start_date' => '2024-11-16 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '9',
                'title' => 'Pendaftaran Peserta Batch I',
                'end_date' => '2024-08-20 23:59:59',
                'date_range' => '1 Agustus 2024 - 20 Agustus 2024',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '9',
                'title' => 'Pendaftaran Peserta Batch II',
                'end_date' => '2024-09-20 23:59:59',
                'date_range' => '21 Agustus 2024 - 20 September 2024',
                'start_date' => '2024-08-21 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '9',
                'title' => 'Pengumpulan Proposal Lomba',
                'end_date' => '2024-09-30 23:59:59',
                'date_range' => '1 Agustus - 30 September 2024',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '9',
                'title' => 'Babak Penyisihan: Proses Seleksi Proposal',
                'end_date' => '2024-10-11 23:59:59',
                'date_range' => '1 Oktober - 11 Oktober 2024',
                'start_date' => '2024-10-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '9',
                'title' => 'Pengumuman Finalis',
                'end_date' => '2024-10-17 23:59:59',
                'date_range' => '17 Oktober 2024',
                'start_date' => '2024-10-17 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '9',
                'title' => 'Pengumpulan Video Prototype',
                'end_date' => '2024-11-04 23:59:59',
                'date_range' => '21 Oktober - 4 November 2024',
                'start_date' => '2024-10-21 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '9',
                'title' => 'Technical Meeting',
                'end_date' => '2024-11-03 23:59:59',
                'date_range' => '3 November 2024',
                'start_date' => '2024-11-03 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '9',
                'title' => 'Online Expo On ITCC TikTok Official',
                'end_date' => '2024-11-13 23:59:59',
                'date_range' => '6 - 13 November 2024',
                'start_date' => '2024-11-06 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '9',
                'title' => 'Final Kategori SMA/SMK',
                'end_date' => '2024-11-15 23:59:59',
                'date_range' => '15 November 2024',
                'start_date' => '2024-11-15 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '9',
                'title' => 'Final Kategori Mahasiswa',
                'end_date' => '2024-11-16 23:59:59',
                'date_range' => '16 November 2024',
                'start_date' => '2024-11-16 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '9',
                'title' => 'Pengumuman Juara',
                'end_date' => '2024-11-16 23:59:59',
                'date_range' => '16 November 2024',
                'start_date' => '2024-11-16 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '10',
                'title' => 'Pendaftaran Peserta Batch I',
                'end_date' => '2024-08-20 23:59:59',
                'date_range' => '1 Agustus 2024 - 20 Agustus 2024',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '10',
                'title' => 'Pendaftaran Peserta Batch II',
                'end_date' => '2024-09-20 23:59:59',
                'date_range' => '21 Agustus 2024 - 20 September 2024',
                'start_date' => '2024-08-21 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '10',
                'title' => 'Pengumpulan Bahan + Hasil Karya ',
                'end_date' => '2024-09-30 23:59:59',
                'date_range' => '1 Agustus - 30 September 2024',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '10',
                'title' => 'Pengumuman 50 Peserta Terbaik',
                'end_date' => '2024-10-10 23:59:59',
                'date_range' => '10 Oktober 2024',
                'start_date' => '2024-10-10 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '10',
                'title' => 'Pengumuman 10 Peserta Terbaik',
                'end_date' => '2024-10-17 23:59:59',
                'date_range' => '17 Oktober 2024',
                'start_date' => '2024-10-17 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '10',
                'title' => 'Technical Meeting',
                'end_date' => '2024-11-03 23:59:59',
                'date_range' => '3 November 2024',
                'start_date' => '2024-11-03 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '10',
                'title' => 'Demonstrasi Projek',
                'end_date' => '2024-11-15 23:59:59',
                'date_range' => '15 November 2024',
                'start_date' => '2024-11-15 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '11',
                'title' => 'Pendaftaran Peserta Batch I',
                'end_date' => '2024-08-20 23:59:59',
                'date_range' => '1 Agustus 2024 - 20 Agustus 2024',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '11',
                'title' => 'Pendaftaran Peserta Batch II',
                'end_date' => '2024-09-20 23:59:59',
                'date_range' => '21 Agustus 2024 - 20 September 2024',
                'start_date' => '2024-08-21 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '11',
                'title' => 'Pengumpulan Bahan + Hasil Karya ',
                'end_date' => '2024-09-30 23:59:59',
                'date_range' => '1 Agustus - 30 September 2024',
                'start_date' => '2024-08-01 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '11',
                'title' => 'Pengumuman 50 Peserta Terbaik',
                'end_date' => '2024-10-10 23:59:59',
                'date_range' => '10 Oktober 2024',
                'start_date' => '2024-10-10 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '11',
                'title' => 'Pengumuman 10 Peserta Terbaik',
                'end_date' => '2024-10-17 23:59:59',
                'date_range' => '17 Oktober 2024',
                'start_date' => '2024-10-17 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '11',
                'title' => 'Technical Meeting',
                'end_date' => '2024-11-03 23:59:59',
                'date_range' => '3 November 2024',
                'start_date' => '2024-11-03 00:00:00',
                'description' => ''
            ],
            [
                'competition_content_id' => '11',
                'title' => 'Demonstrasi Projek',
                'end_date' => '2024-11-15 23:59:59',
                'date_range' => '15 November 2024',
                'start_date' => '2024-11-15 00:00:00',
                'description' => ''
            ],
        ];

        foreach($competition_content_timelines as $competition_content_timeline) {
            CompetitionContentTimeline::create($competition_content_timeline);
        }
    }
}
