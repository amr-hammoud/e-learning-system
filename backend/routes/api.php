<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;


Route::group(["middleware" => "admin", "prefix" => "admin"], function(){
    Route::prefix('users')->group(function () {
        Route::get('all', [UserController::class, 'getAllUsers']);
        Route::post('create', [UserController::class, 'createAccount']);
        Route::post('update/{id}', [UserController::class, 'updateAccount']);
        Route::delete('delete/{id}', [UserController::class, 'deleteAccount']);
    });

});

Route::prefix('auth')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
});

