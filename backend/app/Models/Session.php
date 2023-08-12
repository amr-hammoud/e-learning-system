<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    use HasFactory;

    public function courseId(){
        return $this->belongsTo(Course::class, 'course_id');
    }
    
    public function attendances(){
        return $this->hasMany(Attendance::class, 'session_id');
    }
}
