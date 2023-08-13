<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable=[
        'name',
        'subject',
        'description',
        'max_enrollments',
        'total_sessions',
        'total_assignments',
        'total_quizzes',
        'start_date',
        'end_date',
        'meeting_link',
        'teacher_id',
    ];

    public function students(){
        return $this->belongsToMany(User::class, 'student_enrollments');
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

