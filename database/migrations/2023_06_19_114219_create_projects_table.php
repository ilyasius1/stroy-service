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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id');
            $table->string('title');
            $table->json('images')->nullable();
            $table->float('s');
            $table->float('width');
            $table->float('height');
            $table->smallInteger('bedroom');
            $table->smallInteger('bathroom');
            $table->decimal('minprice', 10, 2);
            //Связь с акциями
            $table->foreignId('deal_id')->nullable();
            $table->boolean('mansarda')->nullable();
            $table->smallInteger('floor');
            $table->string('construction_period');
            $table->string('size_on_plan');
            $table->text('full_construction');
            $table->text('without_finishing');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
