<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'title',
        'images',
        's',
        'width',
        'height',
        'bedroom',
        'bathroom',
        'minprice',
        'mansarda',
        'floor',
        'construction_period',
        'size_on_plan',
        'full_construction',
        'without_finishing'
    ];

    protected $casts = [
        'images' => 'collection',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function prices(): HasMany
    {
        return $this->hasMany(Price::class);
    }

    public function deal(): BelongsTo
    {
        return $this->belongsTo(Deal::class);
    }

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }
}
