<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;
    
    public function userId(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function sessionId(){
        return $this->belongsTo(Session::class, 'session_id');
    }
}
