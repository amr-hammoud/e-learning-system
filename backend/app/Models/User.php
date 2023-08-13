<?php
namespace App\Models;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'user_type_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'user_type_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function courses(){
        return $this->belongsToMany(Course::class, 'student_enrollments');
    }
    public function userType(){
        return $this->belongsTo(UserType::class, 'user_type_id'); 
    }
    public function getFullNameAttribute()
    {
        return $this->attributes['first_name'] . ' ' . $this->attributes['last_name'];
    }
    public function sender(){
        return $this->hasMany(Message::class, 'sender_id'); 
    }

    public function receiver(){
        return $this->hasMany(Message::class, 'receiver_id'); 
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
    return $this->belongsToMany(User::class, 'parents', 'student_id', 'parent_id')->withPivot('student_id');
    }

    public function children(){
        return $this->belongsToMany(User::class, 'parents', 'parent_id', 'student_id');
    }

    public function host(){
        return $this->hasMany(Meeting::class, 'host_id'); 
    }

    public function guest(){
        return $this->hasMany(Meeting::class, 'guest_id'); 
    }

    public function notifications(){
        return $this->hasMany(NotificationStatus::class, 'parent_id');
    }
     /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

}