# SOP PENGERJAAN WEB ITCC-2025

## Struktur Folder
/app untuk seluruh aplikasi Laravel 11, React, Tailwind, Inertia, dan ShacdnUI
/frontend-template untuk hasil slicing desain figma

## Setup frontend-template
git clone https://github.com/PutuRifkiDy/sim-itcc-2025.git
cd frontend-template
npm install
npm run dev

## Setup Full Aplikasi
git clone https://github.com/PutuRifkiDy/sim-itcc-2025.git
cd app
npm install
composer install
update .env nya
php artisan key:generate
php artisan migrate
php artisan db:seed
php artisan serve
npm run dev (buka terminal baru)

## Flow frontend-template
Routing bisa di cek di main.tsx yang kubuat
/home untuk landing page
/competition untuk competition page
/semnas untuk semnas page
/merch untuk merch page
Kalian taruh kodenya sesuai dengan component yang ada di routingnya
