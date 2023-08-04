<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assessment extends Model
{
    use HasFactory;

    public function feedbacks(){
        return $this->hasMany(FeedBack::class, 'assessment_id');
    }
    public function grades(){
        return $this->hasMany(Grade::class, 'assessment_id');
    }
    public function submission(){
        return $this->hasMany(Submission::class, 'assessment_id');
    }
    public function assessmentType(){
        return $this->belongsTo(AssessmentType::class, 'assessment_type_id'); 
    }
    public function course(){
        return $this->belongsTo(Course::class, 'course_id'); 
    }
}
