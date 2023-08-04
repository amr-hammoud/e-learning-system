<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiscussionGroup extends Model
{
    use HasFactory;
    public function groupMessages(){
        return $this->hasMany(GroupMessage::class, 'group_id');
    }
    public function course(){
        return $this->belongsTo(Course::class, 'course_id');
    }
}
