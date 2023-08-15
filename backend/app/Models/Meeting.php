<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Meeting extends Model
{
    use HasFactory;

    protected $appends = ['guestname', 'formatteddatetime'];

    public function host()
    {
        return $this->belongsTo(User::class, 'host_id');
    }

    public function guest()
    {
        return $this->belongsTo(User::class, 'guest_id');
    }

    public function getGuestNameAttribute()
    {
        return $this->guest->full_name;
    }

    public function getFormattedDateTimeAttribute()
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $this->attributes['date_time'])
            ->format('d-m-Y H:i');
    }
}
