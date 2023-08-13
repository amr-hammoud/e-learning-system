<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;




Route::post('insertGroupMessage', [StudentController::class, 'insertGroupMessage']);



Route::group(["middleware" => "admin", "prefix" => "admin"], function(){
    Route::post('create-account', [AuthController::class, 'createAccount']);
});

Route::group(["middleware"=>"student","prefix"=>"student"], function(){
    Route::prefix('courseEnrollments')->group(function () {
        Route::get('availableCourses', [StudentController::class, 'getAvailableCourses']);
        Route::post('enroll', [StudentController::class, 'enroll']);
        Route::post('getMaterials', [StudentController::class, 'getMaterials']);
    });

    Route::prefix('ProgressTracking')->group(function () {
        Route::post('getcompletedAssessments', [StudentController::class, 'completedAssessments']);
        Route::post('getAssesments', [StudentController::class, 'upcomingAssessments']);
        Route::get('grades', [StudentController::class, 'getGrades']);
    });

    Route::prefix('interActiveLearning')->group(function () {
        Route::post('groupMessages', [StudentController::class, 'getGroupMessages']);
    });
});

Route::prefix('auth')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
});

