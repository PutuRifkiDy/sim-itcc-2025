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

- **Manajemen Pengguna**: Registrasi, login, dan manajemen role/permission
- **Manajemen Kompetisi**: Buat dan kelola kompetisi dengan kategori, timeline, prize, FAQ, dan contact person
- **Manajemen Event**: Buat dan kelola event dengan fitur serupa kompetisi
- **Registrasi Kompetisi**: Pendaftaran tim untuk kompetisi dengan pembayaran
- **Registrasi Event**: Pendaftaran individu untuk event
- **Submission**: Upload dan kelola submission untuk kompetisi
- **Pembayaran**: Integrasi metode pembayaran dan tracking status
- **Tim Management**: Buat tim, tambah anggota, dan kelola
- **Merchandise**: Manajemen produk merchandise
- **Export Data**: Export data registrasi, submission, dan peserta dalam format Excel
- **Dashboard Admin**: Panel admin untuk mengelola semua aspek sistem

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
