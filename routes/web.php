<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserAuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('register', [UserAuthController::class, 'register'])->name('register');
Route::post('verificationmail', [UserAuthController::class, 'verificationmail'])->name('verificationmail');
Route::post('userverification', [UserAuthController::class, 'userverification'])->name('userverification');
Route::get('user-listing', [UserAuthController::class, 'userListing'])->name('user-listing');

Route::middleware(['auth'])->group(function () {
    Route::get('profile-edit/{id}', [UserAuthController::class, 'profileEdit'])->name('profile-edit');
    Route::post('profile-update', [UserAuthController::class, 'updateProfile'])->name('profile-update');
});

