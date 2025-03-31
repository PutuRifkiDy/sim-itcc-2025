<?php

use App\Enums\PaymentStatus;
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
        Schema::create('competition_registrations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('competition_id')->constrained('competitions')->cascadeOnDelete();
            $table->foreignId('team_id')->nullable()->constrained('teams')->cascadeOnDelete();
            $table->string('code_registration')->unique();
            $table->string('payment_proof_path')->nullable();
            $table->unsignedInteger('total_payment')->default(0);
            $table->string('payment_status')->default(PaymentStatus::REQUESTED->value);
            $table->string('reject_reason')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competition_registrations');
    }
};
