<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ParentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\TeacherController;

Route::group(["middleware" => "admin", "prefix" => "admin"], function () {

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

    Route::prefix('config')->group(function () {
        Route::get('all', [ConfigController::class, 'getConfigurations']);
        Route::post('create', [ConfigController::class, 'createConfiguration']);
        Route::post('update/{id}', [ConfigController::class, 'updateConfiguration']);
        Route::delete('delete/{id}', [ConfigController::class, 'deleteConfiguration']);
    });
});


Route::group(["middleware" => "teacher", "prefix" => "teacher"], function () {

    Route::group(['middleware' => 'teacherCourse', "prefix" => 'course'], function () {
        Route::get('/{id?}', [TeacherController::class, 'courses']);
        Route::post('material/create', [TeacherController::class, 'createMaterial']);
        Route::post('material', [TeacherController::class, 'getMaterial']);
        Route::get('{id}/students', [CourseController::class, 'students']);
    });
    Route::get('conferences', [TeacherController::class, 'getConferences']);
});


Route::group(["middleware" => "student", "prefix" => "student"], function () {
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
        Route::post('insertGroupMessage', [StudentController::class, 'insertGroupMessage']);
    });

    Route::prefix('chatMessages')->group(function () {
        Route::post('getPrivateMessages', [StudentController::class, 'getChatMessages']);
        Route::post('sendMessage', [StudentController::class, 'sendChatMessage']);
    });
});

Route::group(["prefix" => "parent"], function () {
    Route::get("{parent}/get-student-progress-of-course/{student}/{course}", [ParentController::class, "getStudentProgress"]);
    Route::post('message-teacher', [ParentController::class, "sendMessage"]);
    Route::post('messages-teacher', [ParentController::class, "getMessages"]);
    Route::post('get-student-schedule-records', [ParentController::class, "viewSchedule"]);
    Route::post('get-student-attendance-records', [ParentController::class, "viewAttendance"]);
    Route::post('get-notifications', [ParentController::class, "viewNotifications"]);
    Route::post('schedule-meeting', [ParentController::class, "scheduleMeeting"]);
});


Route::prefix('auth')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
});
