<?php

use App\Http\Controllers\DashboardSemnasController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::controller(FrontController::class)->group(function(){
    // competition
    Route::get('competitions/{competition:slug}', 'show_competitions')->name('competition.front.show');

    // semnas
    Route::get('events/{event:slug}', 'show_events')->name('event.front.show');
    Route::get('register/semnas', 'show_register_semnas')->name('register.semnas.show');
    Route::post('register/semnas/{event:slug}', 'store_register_semnas')->name('register.semnas.store')->middleware('auth');

    // merch
    Route::get('merchandise', 'show_merchandise')->name('merchandise.front.show');
});

Route::controller(DashboardSemnasController::class)->group(function() {
    Route::get('dashboard/semnas', 'index')->name('dashboard.semnas.index');
    Route::post('dashboard/semnas/{id}/payment', 'payment_store')->name('dashboard.semnas.payment');
})->middleware('auth');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
