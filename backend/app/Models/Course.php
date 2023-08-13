<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    public function courses(){
        return $this->belongsToMany(User::class, 'student_enrollments');
    }
    public function getUserenrollmentsCount()
    {
        return $this->courses->count();
    }
    public function assessments(){
        return $this->hasMany(Assessment::class, 'course_id');
    }
    public function teacher(){
        return $this->belongsTo(User::class, 'teacher_id');
    }

    public function notifictions(){
        return $this->hasMany(Notification::class, 'course_id');
    }

    public function materials(){
        return $this->hasMany(Material::class, 'course_id');
    }

    public function sessions(){
        return $this->hasMany(Session::class, 'course_id');
    }

    public function discussionGroup(){
        return $this->hasOne(DiscussionGroup::class, 'course_id');
    }


}

