<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SignUpUser extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function getData(Request $request) {
        return response()->json([
            'test' => $request->file('photo_profile')->extension(),
        ]);
    }
}
