<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Product extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $table = 'products';
    protected $primaryKey = 'id';

    protected $fillable = ['count', 'title', 'img', 'info', 'price', 'deleted_at', 'created_at', 'updated_at'];

    public $timestamps = false;

    // public function loadAll(){
    //     return Product::all();
    // }

    // public function loadOne(){
    //     return Product::find();
    // }

}
