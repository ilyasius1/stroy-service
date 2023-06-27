<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_id',
        'fio',
        'email',
        'phone',
        'comments',
        'is_processed'
    ];

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}
