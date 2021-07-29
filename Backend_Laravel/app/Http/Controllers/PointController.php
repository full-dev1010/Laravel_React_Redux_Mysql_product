<?php

namespace App\Http\Controllers;
use DB;

use Illuminate\Http\Request;
use App\Models\Point;

class PointController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $points = Point::loadPoints();
        return response()->json($points);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();    // body/form-data
        $point = Point::create($data);
        return response()->json($point, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $points = Point::loadPoint($id);
        return response()->json($points, 200);

        // return Point::findOrFail($id);
    }

    /**
     * 
     */

    public function show_product_id($pid){
        $points = Point::loadPointByProduct($pid);
        return response()->json($points, 200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id, $pid)
    {
        $point = Point::findOrFail($id);
        $data = $request->all();
        // Point::updatePoint($id, $data);
        $point->update($data);
        return response()->json(Point::loadPointByProduct($pid), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, $pid)
    {
        $point = Point::findOrFail($id);
        $point->delete();
        return response()->json(Point::loadPointByProduct($pid), 200);
    }
}
