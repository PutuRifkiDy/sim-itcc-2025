<?php

use App\Http\Controllers\DashboardCompetitionController;
use App\Http\Controllers\DashboardCompetitionForAdminLomba;
use App\Http\Controllers\DashboardCompetitionForKesekre;
use App\Http\Controllers\DashboardCompetitionForKesekreController;
use App\Http\Controllers\DashboardCompetitionForLomba;
use App\Http\Controllers\DashboardSemnasController;
use App\Http\Controllers\DashboardSemnasForKesekreController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\OverviewForAdminLomba;
use App\Http\Controllers\OverviewForKesekreController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Landing/Welcome', [
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
    // competition bukan team, langsung aja store data ke competition registration
    Route::post('register/competition/{competition:slug}', 'store_register_competition')->name('register.competition.store')->middleware('auth');

    // competition is_team tampilin form register dulu kalo user klik register maka data store ke register competition, kalo user klik join team maka diminta input token teamnya
    Route::get('register/competition/{competition:slug}', 'show_register_competition')->name('register.competition.show');
    // create team
    Route::get('register/competition/{competition:slug}/team', 'show_register_competition_team')->name('register.competition.team.show');
    Route::post('register/competition/{competition:slug}/team/store', 'store_register_competition_team')->name('register.competition.team.store')->middleware('auth');
    //  join team
    Route::get('register/competition/{competition:slug}/join-team', 'show_register_competition_join_team')->name('register.competition.join-team.show');
    Route::post('register/competition/{competition:slug}/join-team/store', 'store_register_competition_join_team')->name('register.competition.join-team.store')->middleware('auth');


    // semnas
    Route::get('events/{event:slug}', 'show_events')->name('event.front.show');
    Route::get('register/semnas', 'show_register_semnas')->name('register.semnas.show');
    Route::post('register/semnas/{event:slug}', 'store_register_semnas')->name('register.semnas.store')->middleware('auth');

    // merch
    Route::get('merchandise', 'show_merchandise')->name('merchandise.front.show');
})->middleware('role:guest');


Route::controller(DashboardSemnasController::class)->group(function() {
    Route::get('dashboard/semnas', 'index')->name('dashboard.semnas.index');
    Route::delete('dashboard/semnas/{id}', 'destroy')->name('dashboard.semnas.destroy');
    Route::post('dashboard/semnas/{id}/payment', 'payment_store')->name('dashboard.semnas.payment');
})->middleware(['auth']);

Route::controller(OverviewForKesekreController::class)->group(function() {
    Route::get('dashboard/overview/admin-kesekre', 'index')->name('dashboard.overview.admin-kesekre.index');
})->middleware(['auth', 'role:admin']);

Route::controller(OverviewForAdminLomba::class)->group(function() {
    Route::get('dashboard/overview/admin-lomba', 'index')->name('dashboard.overview.admin-lomba.index');
});

Route::controller(DashboardSemnasForKesekreController::class)->group(function() {
    Route::get('dashboard/semnas/admin-kesekre', 'index')->name('dashboard.semnas.admin-kesekre.index');
    Route::post('dashboard/semnas/admin-kesekre/{id}/payment', 'verif_payment')->name('dashboard.semnas.admin-kesekre.payment');
    Route::post('dashboard/semnas/admin-kesekre/{id}/reject', 'reject_payment')->name('dashboard.semnas.admin-kesekre.reject');
    Route::get('export/event-registrations', [ExportController::class, 'export'])->name('export.event-registrations');
})->middleware(['auth', 'role:admin']);

Route::controller(DashboardCompetitionForKesekreController::class)->group(function() {
    Route::get('dashboard/competition/admin-kesekre', 'index')->name('dashboard.competition.admin-kesekre.index');
    Route::post('dashboard/competition/admin-kesekre/{id}/payment', 'verif_payment')->name('dashboard.competition.admin-kesekre.payment');
    Route::post('dashboard/competition/admin-kesekre/{id}/reject', 'reject_payment')->name('dashboard.competition.admin-kesekre.reject');
    Route::get('export/competition-registrations', [ExportController::class, 'export_competition'])->name('export.competition-registrations');
})->middleware(['auth', 'role:admin']);

Route::controller(DashboardCompetitionForAdminLomba::class)->group(function() {
    Route::get('dashboard/participant/admin-lomba', 'show_participant')->name('dashboard.competition.admin-lomba.index');
    Route::get('dashboard/submission/admin-lomba', 'show_submission')->name('dashboard.competition.admin-lomba.submission');
    Route::post('dashboard/admin-lomba/{id}/verif-submission', 'verif_submission')->name('dashboard.competition.admin-lomba.verif-submission');
    Route::post('dashboard/admin-lomba/{id}/reject-submission', 'reject_submission')->name('dashboard.competition.admin-lomba.reject-submission');
    Route::get('export/competition-submissions', [ExportController::class, 'export_competition_submission'])->name('export.competition-submissions');
    Route::get('export/competition-participants', [ExportController::class, 'export_competition_participant'])->name('export.competition-participants');
})->middleware(['auth', 'role:admin']);

Route::controller(DashboardCompetitionController::class)->group(function() {
    Route::get('dashboard/competition', 'index')->name('dashboard.competition.index');
    Route::get('dashboard/competition/{id}', 'show')->name('dashboard.competition.show');
    Route::post('dashboard/competition/{id}/payment', 'payment_store')->name('dashboard.competition.payment');
    Route::post('dashboard/competition/{id}/team_name', 'update_team_name')->name('dashboard.competition.team_name');
    Route::post('dashboard/competition/submission/submission-store', 'submission_store')->name('dashboard.competition.submission');
    Route::delete('dashboard/competition/{id}', 'destroy')->name('dashboard.competition.destroy');
})->middleware('auth');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
