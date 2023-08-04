<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NotificationStatus extends Model
{
    use HasFactory;
    public function parentId(){
        return $this->belongsTo(User::class, 'parent_id'); 
    }
    public function notificationId(){
        return $this->belongsTo(Notification::class, 'notification_id'); 
    }
}
