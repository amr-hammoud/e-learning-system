<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    public function userId(){
        return $this->belongsTo(User::class, 'user_id');
    }
    
    public function assessmentId(){
        return $this->belongsTo(Assessment::class, 'assessment_id');
    }
}
