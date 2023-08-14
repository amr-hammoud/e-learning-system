<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GroupMessage extends Model
{
    use HasFactory;
    
    public function user(){
        return $this->belongsTo(User::class, 'sender_id');
    }
    
    public function disscussionGroupId(){
        return $this->belongsTo(User::class, 'group_id');
    }
}
