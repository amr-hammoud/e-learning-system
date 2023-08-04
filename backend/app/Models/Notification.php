<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;
    public function courseId(){
        return $this->belongsTo(Course::class, 'course_id');
    }
    public function parentId(){
        return $this->belongsTo(Family::class, 'parent_id');
    }
    public function notificationStatus(){
        return $this->hasMany(NotificationStatus::class, 'notification_id');
    }
}
