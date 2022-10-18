<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class Home extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string
     */

    public function getUser(Request $request) {
        return view('welcome');
    }

    public function getUserDetail(Request $request) {
        return response()->json([
           'userDetail' => Auth::user(),
        ]);
    }

    public function searchUser(Request $request) {
        $searchUser = User::where('name', 'LIKE' , "%" . $request->input('user') . "%")->get();
        return response()->json([
           'test' => $searchUser,
        ]);
    }

    public function logout(Request $request) {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json([
            'success' => 'LogOut'
        ]);
    }

    public function viewUser(User $user) {
        return response()->json([
            'detailUser' => $user,
        ]);
    }

    public function userView() {
        return view('welcome');
    }

    public function getStatusUser(Request $request) {

        $validator = Validator::make($request->all(), [
            'status' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
               'errors' => $validator->errors()->get('status')
            ]);
        } else {
            return response()->json([
                'status' => $request->input('status')
            ]);
        }
    }
}
