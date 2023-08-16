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
        Schema::table('assessments', function (Blueprint $table) {
            $table->dateTime('due_date')->change();
        });
        Schema::table('meetings', function (Blueprint $table) {
            $table->dateTime('date_time')->change();
        });
        Schema::table('sessions', function (Blueprint $table) {
            $table->dateTime('date_time')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
