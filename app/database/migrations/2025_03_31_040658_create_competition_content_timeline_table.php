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
        Schema::create('competition_content_timeline', function (Blueprint $table) {
            $table->id();
            $table->foreignId('competition_content_id')->constrained('competition_content')->cascadeOnDelete();
            $table->string('title');
            $table->dateTimeTz('start_date');
            $table->dateTimeTz('end_date');
            $table->string('date_range');
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competition_content_timeline');
    }
};
