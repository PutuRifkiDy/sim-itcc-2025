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
        Schema::create('event_content_faq', function (Blueprint $table) {
            $table->id();
            $table->foreignId('event_content_id')->constrained('event_content')->cascadeOnDelete();
            $table->text('answer');
            $table->text('question');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_content_faq');
    }
};
