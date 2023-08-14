<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;

    protected $appends = ['url'];

    public function courseId()
    {
        return $this->belongsTo(Course::class, 'course_id');
    }

    public function getUrlAttribute()
    {
        return asset('storage/' . $this->attachment);
    }
}
