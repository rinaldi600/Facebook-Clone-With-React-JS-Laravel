<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Home extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */

    public function index(Request $request) {
        return $request->user();
    }

    public function logout(Request $request) {
        if ($request->user()) {
            $request->user()->tokens()->delete();
            return response()->json(['message' => 'Anda berhasil logout'], 200);
        } else {
            return response()->json([
                'message' => 'Tidak ada token'
            ], 200);
        }
    }
}
