<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $t) {
            $t->foreign('user_type_id')->references('id')->on('user_types');
        });
        Schema::table('messages', function (Blueprint $t) {
            $t->foreign('sender_id')->references('id')->on('users');
            $t->foreign('receiver_id')->references('id')->on('users');
        });
        Schema::table('feedbacks', function (Blueprint $t) {
            $t->foreign('user_id')->references('id')->on('users');
            $t->foreign('assessment_id')->references('id')->on('assessments');
        });
        Schema::table('grades', function (Blueprint $t) {
            $t->foreign('user_id')->references('id')->on('users');
            $t->foreign('assessment_id')->references('id')->on('assessments');
        });
        Schema::table('submissions', function (Blueprint $t) {
            $t->foreign('user_id')->references('id')->on('users');
            $t->foreign('assessment_id')->references('id')->on('assessments');
        });
        Schema::table('assessments', function (Blueprint $t) {
            $t->foreign('assessment_type_id')->references('id')->on('assessment_types');
            $t->foreign('course_id')->references('id')->on('courses');
        });
        Schema::table('meetings', function (Blueprint $t) {
            $t->foreign('host_id')->references('id')->on('users');
            $t->foreign('guest_id')->references('id')->on('users');
        });
        Schema::table('attendances', function (Blueprint $t) {
            $t->foreign('user_id')->references('id')->on('users');
            $t->foreign('session_id')->references('id')->on('sessions');
        });
        Schema::table('group_messages', function (Blueprint $t) {
            $t->foreign('sender_id')->references('id')->on('users');
            $t->foreign('group_id')->references('id')->on('discussion_groups');
        });
        Schema::table('families', function (Blueprint $t) {
            $t->foreign('student_id')->references('id')->on('users');
            $t->foreign('parent_id')->references('id')->on('users');
        });
        Schema::table('discussion_groups', function (Blueprint $t) {
            $t->foreign('course_id')->references('id')->on('courses');
        });
        Schema::table('sessions', function (Blueprint $t) {
            $t->foreign('course_id')->references('id')->on('courses');
        });
        Schema::table('courses', function (Blueprint $t) {
            $t->foreign('teacher_id')->references('id')->on('users');
        });
        Schema::table('notifications', function (Blueprint $t) {
            $t->foreign('course_id')->references('id')->on('courses');
        });
        Schema::table('notification_statuses', function (Blueprint $t) {
            $t->foreign('notification_id')->references('id')->on('notifications');
            $t->foreign('parent_id')->references('id')->on('users');
        });
        Schema::table('materials', function (Blueprint $t) {
            $t->foreign('course_id')->references('id')->on('courses');
        });
        Schema::table('student_enrollments', function (Blueprint $t) {
            $t->foreign('course_id')->references('id')->on('courses');
            $t->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('relationships');
    }
};
