<?php

namespace App\Models;

use DB;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Point extends Model
{
    use HasFactory;
    protected $table = 'points';
    protected $primaryKey = 'id';
    protected $foriegnKey = 'user_id';

    protected $fillable = ['user_id', 'product_id', 'point', 'deleted_at', 'created_at', 'updated_at'];

    public $timestamps = false;

    public static function loadPoints(){
        $points = DB::table('users')
            ->leftJoin('points', 'users.id', '=', 'points.user_id')
            ->where('user_id', 1)
            ->orderBy('point', 'desc')
            ->get();
        return $points;        
    }

    public static function loadPoint($pid){
        $point = DB::table('users')
            ->join('points', 'users.id', '=', 'points.user_id')
            ->where('points.id', $pid)
            ->orderBy('point', 'desc')
            ->get();
        return $point;        
    }

    public static function loadPointByProduct($pd_id){
        if( intval($pd_id) > 0 ){
            $points = DB::table('users')
            ->join('points', 'users.id', '=', 'points.user_id')
            ->where('product_id', $pd_id)
            ->orderBy('point', 'desc')
            ->get();
            return $points;        
        }
        else{
            $points = DB::table('users')
            ->join('points', 'users.id', '=', 'points.user_id')
            ->orderBy('point', 'desc')
            ->get();
            return $points;
        }
    }

    public static function updatePoint($id, $data){
        $affected = DB::table('points')
              ->where('id', $id)
              ->update(['point' => $data['point']]);
        return $affected;
    }
}
