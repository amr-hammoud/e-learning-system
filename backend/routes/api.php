<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;

Route::get('available-courses', [StudentController::class, 'getAvailableCourses']);

Route::group(["middleware" => "admin", "prefix" => "admin"], function(){
    Route::post('create-account', [AuthController::class, 'createAccount']);
});

Route::group(["middleware"=>"student","prefix"=>"student"], function(){
    Route::prefix('course-enrollments')->group(function () {
        
        Route::post('enroll', [StudentController::class, 'enroll']);
        Route::post('get-materials', [StudentController::class, 'getMaterials']);
    });

    Route::prefix('progress-tracking')->group(function () {
        Route::post('get-completed-assessments', [StudentController::class, 'completedAssessments']);
        Route::post('get-assesments', [StudentController::class, 'upcomingAssessments']);
        Route::get('grades', [StudentController::class, 'getGrades']);
    });

    Route::prefix('interactive-learning')->group(function () {
        Route::post('group-messages', [StudentController::class, 'getGroupMessages']);
        Route::post('insert-group-message', [StudentController::class, 'insertGroupMessage']);
    });

    Route::prefix('study-support')->group(function () {
        Route::post('get-private-messages', [StudentController::class, 'getChatMessages']);
        Route::post('send-message', [StudentController::class, 'sendChatMessage']);
        Route::post('meeting-schedule', [StudentController::class, 'meetingSchedule']);
    });
    Route::prefix('offline-learning')->group(function () {
        Route::get('get-all-courses', [StudentController::class, 'getAllCourses']);
        Route::get('get-all-materials', [StudentController::class, 'getAllMaterials']);
    });
});

Route::prefix('auth')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
});

