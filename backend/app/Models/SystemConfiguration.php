<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SystemConfiguration extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'color_primary',
        'color_secondary',
        'accent_primary',
        'accent_secondary',
        'text_primary',
        'text_secondary',
        'background_primary',
    ];
}
