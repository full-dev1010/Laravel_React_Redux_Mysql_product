<?php

namespace App\Http\Controllers;
use DB;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $points = Point::loadPoints();
        // return response()->json($points);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $data = $request->all();    // body/form-data
        $data['password'] = md5($data['password']);
        if(User::isInUser($data)){
            return response()->json([], 401);
        }
        $user = User::create($data);
        return response()->json($user, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function login(Request $request){
        $data = $request->all();
        $user = User::loadUser($data);
        return response()->json($user, 200);
    }
    public function show($id)
    {
        // $points = Point::loadPoint($id);
        // return response()->json($points);

        // return Point::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
