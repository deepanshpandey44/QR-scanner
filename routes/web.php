<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FrontendController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('about-us', [FrontendController::class, 'aboutUs'])->name('about-us');
Route::get('behind-the-scene', [FrontendController::class, 'behindTheScene'])->name('behind-the-scene');
Route::get('contactus', [FrontendController::class, 'contactus'])->name('contactus');
Route::get('course-fee', [FrontendController::class, 'courseFee'])->name('course-fee');
Route::get('faculty', [FrontendController::class, 'faculty'])->name('faculty');
Route::get('gallery', [FrontendController::class, 'gallery'])->name('gallery');

Route::get('hobby-course', [FrontendController::class, 'hobbyCourse'])->name('hobby-course');
Route::get('one-month-course', [FrontendController::class, 'oneMonthCourse'])->name('one-month-course');
Route::get('fifteen-days-course', [FrontendController::class, 'fifteenDaysCourse'])->name('fifteen-days-course');
Route::get('four-days-course', [FrontendController::class, 'fourDaysCourse'])->name('four-days-course');

Route::get('professional-course', [FrontendController::class, 'professionalCourse'])->name('professional-course');
Route::get('one-year-course', [FrontendController::class, 'oneYearCourse'])->name('one-year-course');
Route::get('three-months-course', [FrontendController::class, 'threeMonthsCourse'])->name('three-months-course');
Route::get('six-months-course', [FrontendController::class, 'sixMonthsCourse'])->name('six-months-course');

// Route::post('email', [EmailController::class, 'sendEmail'])->name('send.email');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
