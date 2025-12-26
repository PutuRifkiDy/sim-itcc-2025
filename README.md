# Sistem Informasi ITCC 2025 Event

Sistem Informasi untuk mengelola event ITCC 2025, termasuk registrasi kompetisi, event, submission, dan pembayaran. Dibangun menggunakan Laravel sebagai backend, React dengan InertiaJS untuk frontend, dan ShadCNUI untuk komponen UI.

## Teknologi yang Digunakan

- **Backend**: Laravel 11
- **Frontend**: React 18, InertiaJS
- **UI Framework**: ShadCNUI (berbasis Radix UI), TailwindCSS
- **Database**: MySQL/PostgreSQL (sesuai konfigurasi)
- **Authentication**: Laravel Sanctum
- **Permissions**: Spatie Laravel Permission
- **File Handling**: Intervention Image
- **Export**: Maatwebsite Excel
- **PDF Generation**: Barryvdh Laravel DOMPDF

## Fitur Utama

### Manajemen Pengguna
- Registrasi dan login pengguna
- Verifikasi email
- Manajemen profil (NIM, institusi, nomor telepon, dll.)
- Sistem role dan permission menggunakan Spatie Laravel Permission
- Status pengguna (aktif, tidak aktif, dll.)

### Manajemen Kompetisi
- Buat dan kelola kompetisi dengan kode unik
- Kategori kompetisi
- Pengaturan tim atau individu
- Pengaturan apakah perlu submission
- Status registrasi terbuka/tutup
- Harga kompetisi berdasarkan kategori
- Konten kompetisi: deskripsi, timeline, prize, FAQ, contact person

### Manajemen Event (Semnas)
- Buat dan kelola event dengan kode unik
- Kategori dan tipe event
- Status registrasi terbuka/tutup
- Harga event
- Konten event: deskripsi, timeline, FAQ, contact person

### Registrasi Kompetisi
- Registrasi tim atau individu
- Pembuatan tim dengan leader dan anggota
- Upload bukti pembayaran
- Tracking status pembayaran (pending, approved, rejected)
- Kode registrasi unik
- Total pembayaran

### Registrasi Event
- Registrasi individu untuk event
- Tracking status pembayaran

### Submission Kompetisi
- Upload link submission untuk kompetisi yang memerlukan
- Status submission (pending, approved, rejected)
- Alasan penolakan
- Approval oleh admin

### Tim Management
- Pembuatan tim oleh leader
- Penambahan anggota tim
- Token untuk join tim
- Relasi dengan kompetisi

### Pembayaran
- Metode pembayaran
- Upload bukti pembayaran
- Approval/reject pembayaran oleh admin
- Status pembayaran menggunakan enum

### Merchandise
- Manajemen produk merchandise
- Batch merchandise dengan tanggal mulai dan akhir
- Harga, deskripsi, gambar

### Export Data
- Export registrasi kompetisi dalam format Excel
- Export registrasi event
- Export submission
- Export peserta kompetisi

### Dashboard
- Dashboard untuk peserta: lihat registrasi, submission, dll.
- Dashboard admin lomba: kelola kompetisi, approval payment/submission
- Dashboard kesekre: overview dan manajemen umum
- Dashboard semnas: kelola event

### Frontend Pages
- Landing page (/home)
- Halaman kompetisi (/competition)
- Halaman semnas (/semnas)
- Halaman merchandise (/merch)

### Lainnya
- Flash messages untuk notifikasi
- Helper untuk pesan flash
- Mail system untuk notifikasi
- Image handling menggunakan Intervention Image
- PDF generation untuk laporan
- Testing menggunakan PestPHP

## Persyaratan Sistem

- PHP 8.2 atau lebih tinggi
- Composer
- Node.js 18+ dan npm
- Database: MySQL 8.0+ atau PostgreSQL

## Instalasi

1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd sim-itcc-2025
   ```

2. **Instalasi Dependencies Backend**
   ```bash
   cd app
   composer install
   ```

3. **Instalasi Dependencies Frontend**
   ```bash
   npm install
   cd ../frontend-template
   npm install
   cd ..
   ```

4. **Konfigurasi Environment**
   - Salin file `.env.example` ke `.env` di folder `app/`
     ```bash
     cp app/.env.example app/.env
     ```
   - Edit file `app/.env` dan atur konfigurasi berikut:
     ```env
     APP_NAME="ITCC 2025"
     APP_ENV=local
     APP_KEY=
     APP_DEBUG=true
     APP_URL=http://localhost:8000

     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=itcc_2025
     DB_USERNAME=your_username
     DB_PASSWORD=your_password

     MAIL_MAILER=smtp
     MAIL_HOST=mailpit
     MAIL_PORT=1025
     MAIL_USERNAME=null
     MAIL_PASSWORD=null
     MAIL_ENCRYPTION=null
     MAIL_FROM_ADDRESS="hello@example.com"
     MAIL_FROM_NAME="${APP_NAME}"

     # Konfigurasi lainnya sesuai kebutuhan
     ```

5. **Generate Application Key**
   ```bash
   php artisan key:generate
   ```

6. **Menjalankan Migrasi Database**
   ```bash
   php artisan migrate
   ```

7. **Menjalankan Seeder (Opsional)**
   ```bash
   php artisan db:seed
   ```

8. **Build Assets**
   ```bash
   # Untuk development
   npm run dev

   # Untuk production
   npm run build
   ```

## Menjalankan Aplikasi

1. **Jalankan Server Laravel**
   ```bash
   php artisan serve
   ```
   Aplikasi akan berjalan di `http://localhost:8000`

2. **Jalankan Frontend Development Server (jika diperlukan)**
   ```bash
   cd frontend-template
   npm run dev
   ```

## Kontribusi

1. Fork repository
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## Lisensi

Proyek ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk detail lebih lanjut.
