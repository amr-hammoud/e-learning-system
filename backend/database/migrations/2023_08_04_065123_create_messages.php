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
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sender_id');
            $table->unsignedBigInteger('receiver_id');
            $table->string('content');
            $table->timestamps();
        });
        Schema::create('discussion_groups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->unsignedBigInteger('course_id');
            $table->timestamps();
        });
        Schema::create('group_messages', function (Blueprint $table) {
            $table->id();
            $table->string('content');
            $table->unsignedBigInteger('sender_id');
            $table->unsignedBigInteger('group_id');
            $table->timestamps();
        });
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->string('content');
            $table->unsignedBigInteger('course_id');
            $table->timestamps();
        });
        Schema::create('notification_statuses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('notification_id');
            $table->unsignedBigInteger('parent_id');
            $table->integer('is_read');
            $table->timestamps();
        });
       

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
        Schema::dropIfExists('discussion_groups');
        Schema::dropIfExists('group_messages');
        Schema::dropIfExists('notifications');
    }
};
