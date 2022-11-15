<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory;
    use SoftDeletes;
    use HasApiTokens, HasFactory, Notifiable;
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'username';
    }

    public function posts() {
        return $this->hasMany(Post::class,'username','username');
    }

    public function friends() {
        return $this->hasMany(Friend::class,'username','username');
    }

    public function comments() {
        return $this->hasMany(Comment::class,'username','username');
    }

}
