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
            $t->foreign('user_type_id')->references('id')->on('user_types')->onDelete('cascade');
        });

        Schema::table('messages', function (Blueprint $t) {
            $t->foreign('sender_id')->references('id')->on('users')->onDelete('cascade');
            $t->foreign('receiver_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::table('feedbacks', function (Blueprint $t) {
            $t->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $t->foreign('assessment_id')->references('id')->on('assessments')->onDelete('cascade');
        });

        Schema::table('grades', function (Blueprint $t) {
            $t->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $t->foreign('assessment_id')->references('id')->on('assessments')->onDelete('cascade');
        });

        Schema::table('submissions', function (Blueprint $t) {
            $t->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $t->foreign('assessment_id')->references('id')->on('assessments')->onDelete('cascade');
        });

        Schema::table('assessments', function (Blueprint $t) {
            $t->foreign('assessment_type_id')->references('id')->on('assessment_types')->onDelete('cascade');
            $t->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');
        });

        Schema::table('meetings', function (Blueprint $t) {
            $t->foreign('host_id')->references('id')->on('users')->onDelete('cascade');
            $t->foreign('guest_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::table('attendances', function (Blueprint $t) {
            $t->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $t->foreign('session_id')->references('id')->on('sessions')->onDelete('cascade');
        });

        Schema::table('group_messages', function (Blueprint $t) {
            $t->foreign('sender_id')->references('id')->on('users')->onDelete('cascade');
            $t->foreign('group_id')->references('id')->on('discussion_groups')->onDelete('cascade');
        });

        Schema::table('parents', function (Blueprint $t) {
            $t->foreign('student_id')->references('id')->on('users')->onDelete('cascade');
            $t->foreign('parent_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::table('discussion_groups', function (Blueprint $t) {
            $t->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');
        });

        Schema::table('sessions', function (Blueprint $t) {
            $t->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');
        });

        Schema::table('courses', function (Blueprint $t) {
            $t->foreign('teacher_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::table('notifications', function (Blueprint $t) {
            $t->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');
        });

        Schema::table('notification_statuses', function (Blueprint $t) {
            $t->foreign('notification_id')->references('id')->on('notifications')->onDelete('cascade');
            $t->foreign('parent_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::table('materials', function (Blueprint $t) {
            $t->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');
        });

        Schema::table('student_enrollments', function (Blueprint $t) {
            $t->foreign('course_id')->references('id')->on('courses')->onDelete('cascade');
            $t->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
