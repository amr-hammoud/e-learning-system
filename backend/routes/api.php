<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\AnalyticsController;


Route::group(["middleware" => "admin", "prefix" => "admin"], function(){

    Route::prefix('user')->group(function () {
        Route::get('all', [UserController::class, 'getAllUsers']);
        Route::get('all/{type}', [UserController::class, 'getUsersByType']);
        Route::post('create', [UserController::class, 'createAccount']);
        Route::post('update/{id}', [UserController::class, 'updateAccount']);
        Route::delete('delete/{id}', [UserController::class, 'deleteAccount']);
    });

    Route::prefix('analytics')->group(function () {
        Route::get('/courses', [AnalyticsController::class, 'getCoursesAnalytics']);
    });

    Route::prefix('course')->group(function () {
        Route::get('all', [CourseController::class, 'getAllCourses']);
        Route::post('create', [CourseController::class, 'createCourse']);
        Route::post('update/{id}', [CourseController::class, 'updateCourse']);
        Route::delete('delete/{id}', [CourseController::class, 'deleteCourse']);
    });

});

Route::prefix('auth')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
});

