<?php

use App\Models\User;

use App\Models\ChatMessage;
use Illuminate\Support\Facades\Route;
use App\Events\MessageSent;


use App\Http\Controllers\ChatController;
use App\Http\Controllers\DashboardController;





Route::get('/', function () {
    return redirect()->route('login');
});


Auth::routes();

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth'])
    ->name('dashboard');




Route::middleware(['auth'])->group(function () {
    Route::get('/chat/{friend}', [ChatController::class, 'chat'])->name('chat');
    Route::get('/messages/{friend}', [ChatController::class, 'index']);
    Route::post('/messages/{friend}', [ChatController::class, 'store']);
});


require __DIR__ . '/auth.php';
