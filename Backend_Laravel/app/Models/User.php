<?php

namespace App\Models;
use DB;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;
    protected $table = 'users';
    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static function loadUser($data){
        $user = DB::table('users')
            ->where('email', $data['email'])
            ->where('password', md5($data['password']))
            ->get()->first();
        return $user;        
    }

    public static function isInUser($data){
        $users = DB::table('users')
                ->selectRaw('*')
                ->where('email', '=', $data['email'])
                ->get();
        return count($users) > 0;
    }
}
