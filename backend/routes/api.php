<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::group(["middleware" => "admin", "prefix" => "admin"], function(){
    Route::post('create-account', [AuthController::class, 'createAccount']);
});

Route::prefix('auth')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    
    Route::group(["prefix" => "parent"], function(){
        Route::get("get-student-progress-of-course/{student}/{course}", [ParentController::class, "getStudentProgress"]);
    });

    
});

