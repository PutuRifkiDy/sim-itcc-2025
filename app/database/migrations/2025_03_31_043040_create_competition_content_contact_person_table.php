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
        Schema::create('competition_content_contact_person', function (Blueprint $table) {
            $table->id();
            $table->foreignId('competition_content_id')->constrained('competition_content')->cascadeOnDelete();
            $table->string('name');
            $table->string('id_line');
            $table->string('wa_number');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competition_content_contact_person');
    }
};
