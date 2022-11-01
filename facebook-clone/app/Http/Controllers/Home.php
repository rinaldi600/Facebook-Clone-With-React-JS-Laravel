<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\Post;
use App\Models\Friend;

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
        $user->posts;
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
            $postUser = Post::create([
                'id_post' => 'POST - ' . date('YmdHis').substr((string)microtime(), 1, 8),
                'username' => Auth::user()['username'],
                'post' => $request->input('status'),
            ]);

            return response()->json([
                'success' => 'Data Berhasil Ditambahkan'
            ]);
        }
    }

    public function myUserView() {
        return view('welcome');
    }

    public function myPost(User $user) {
        return response()->json([
          'post' => $user->posts
        ]);
    }

    public function addFriend(Request $request) {

        Friend::create([
            'id_friend' => 'FRIEND - ' . date('YmdHis').substr((string)microtime(), 1, 8),
            'username' => Auth::user()['username'],
            'username_friend' => $request->input('usernameFriend'),
        ]);

        return response()->json([
           'response' => 'Berhasil menambahkan teman'
        ]);
    }

    public function checkFriend(User $user, $friend) {
        return response()->json([
            'is_friend' => count($user->friends->where('username_friend', $friend)) === 0 ?
                null : $user->friends->where('username_friend', $friend)->first()->is_friend,
        ]);
    }

    public function requestFriend($usernameFriend) {
        return response()->json([
            'dataRequest' => Friend::with('users')->where([
                ['is_friend',0],
                ['username_friend', $usernameFriend],
            ])->get(),
        ]);
    }

}
