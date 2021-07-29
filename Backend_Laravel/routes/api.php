<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PointController;
use App\Http\Controllers\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('/', 'ProductController@index')->name('products.index');

// begin api for Product

Route::get('product/', [ProductController::class, 'index']);
Route::get('product/{id}', [ProductController::class, 'show']);
Route::post('product/', [ProductController::class, 'store']);
// Route::match(['get', 'post'], '/', [ProductController::class, 'store']);
Route::put('product/{id}', [ProductController::class, 'update']);
Route::delete('product/{id}', [ProductController::class, 'destroy']);
// end api for Product


// begin api for Point
Route::get('point/', [PointController::class, 'index']);
Route::get('point/{pid}', [PointController::class, 'show']);
Route::get('point/product/{pid}', [PointController::class, 'show_product_id']);
Route::post('point/product/{pid}', [PointController::class, 'store']);
Route::put('point/{pid}/product/{productid}', [PointController::class, 'update']);
Route::delete('point/{pid}/product/{productid}', [PointController::class, 'destroy']);

// end api for Pointx

// begin api for Point
Route::post('users/login', [UserController::class, 'login']);
Route::post('users/register', [UserController::class, 'register']);
// end api for Point
