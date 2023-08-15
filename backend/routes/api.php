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
        Route::get('get/{id}', [TeacherController::class, 'getCourseData']);
        Route::post('material/create', [TeacherController::class, 'createMaterial']);
        Route::post('material', [TeacherController::class, 'getMaterial']);
        Route::get('{id}/students', [CourseController::class, 'students']);
    });
    Route::get('conference', [TeacherController::class, 'getConferences']);
    Route::post('conference/create', [TeacherController::class, 'createConference']);
});


Route::group(["middleware" => "student", "prefix" => "student"], function () {
    Route::prefix('courseEnrollments')->group(function () {
        Route::get('availableCourses', [StudentController::class, 'getAvailableCourses']);
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
