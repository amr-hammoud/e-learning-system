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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('teacher_id');
            $table->string('name');
            $table->string('subject');
            $table->string('description');
            $table->integer('max_enrollments');
            $table->integer('total_sessions');
            $table->integer('total_assignments');
            $table->integer('total_quizzes');
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->string('meeting_link');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
