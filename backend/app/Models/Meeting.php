<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    use HasFactory;
    public function host(){
        return $this->belongsTo(User::class, 'host_id');
    }
    public function guest(){
        return $this->belongsTo(User::class, 'guest_id');
    }
}
