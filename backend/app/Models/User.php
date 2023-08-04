<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
    public function courses(){
        return $this->belongsToMany(Course::class, 'student_enrollments');
    }
    public function userType(){
        return $this->belongsTo(UserType::class, 'user_type_id'); 
    }
    public function sender(){
        return $this->belongsTo(Message::class, 'sender_id'); 
    }
    public function receiver(){
        return $this->belongsTo(Message::class, 'receiver_id'); 
    }
    public function feedbacks(){
        return $this->hasMany(FeedBack::class, 'user_id');
    }
    public function grades(){
        return $this->hasMany(Grade::class, 'user_id');
    }
    public function submission(){
        return $this->hasMany(Submission::class, 'user_id');
    }
    public function attendance(){
        return $this->hasMany(Attendance::class, 'user_id');
    }
    public function teacher(){
        return $this->hasMany(Course::class, 'teacher_id');
    }
    public function groupMessages(){
        return $this->hasMany(GroupMessage::class, 'sender_id');
    }
    public function parents(){
    return $this->belongsToMany(User::class, 'families', 'student_id', 'parent_id');
    }
    public function children(){
        return $this->belongsToMany(User::class, 'families', 'parent_id', 'student_id');
    }
    public function host(){
        return $this->belongsTo(Meeting::class, 'host_id'); 
    }
    public function guest(){
        return $this->belongsTo(Meeting::class, 'guest_id'); 
    }
    public function notifications(){
        return $this->hasMany(NotificationStatus::class, 'parent_id');
    }
    
}
