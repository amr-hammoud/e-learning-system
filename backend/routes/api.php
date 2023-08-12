<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::group(["middleware" => "admin", "prefix" => "admin"], function(){
    Route::post('create-account', [AuthController::class, 'createAccount']);
});
Route::group(["middleware"=>"student","prefix"=>"student"], function(){
    
});
Route::prefix('auth')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
});

