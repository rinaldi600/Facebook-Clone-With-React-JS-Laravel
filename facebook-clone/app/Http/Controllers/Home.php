<?php

namespace App\Http\Controllers;

use App\Models\Comment;
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

    public function myPost(User $user, Friend $friend, Post $post) {
        return response()->json([
               'postsFriend' => Friend::with(['usersFriend.posts','usersFriend.posts.users:username,photo_profile,name,email','usersFriend.posts.comments'])->where('username', $user['username'])
                                ->get()
        ]);
    }

    public function myOwnPosts(User $user) {
        $user->posts;
        return response()->json([
            'detailUser' => $user,
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

    public function sendBackRequestFriend(Request $request) {
        Friend::where('id_friend', $request->input('id_friend'))->update([
            'is_friend' => $request->input('is_friend')
        ]);
        return response()->json([
           'test' => 'Permintaan pertemanan dikirim kembali',
        ]);
    }

    public function checkFriend(User $user, $friend) {
        return response()->json([
           'is_friend' => $user->friends->where('username_friend', $friend)->first(),
        ]);
    }

    public function requestFriend() {
        return response()->json([
            'dataRequest' => Friend::with('users')->where([
                ['is_friend','pending'],
                ['username_friend', Auth::user()['username']],
            ])->get(),
        ]);
    }

    public function confirmFriend(Request $request) {
        if ($request->input('is_friend') === 'reject') {
            Friend::where('id_friend', $request->input('id_friend'))->update([
                'is_friend' => $request->input('is_friend'),
            ]);
            return response()->json([
                'work' => 'reject'
            ]);
        } else {
            Friend::where('id_friend', $request->input('id_friend'))->update([
                'is_friend' => $request->input('is_friend'),
            ]);
            Friend::create([
                'id_friend' => 'FRIEND - ' . date('YmdHis').substr((string)microtime(), 1, 8),
                'username' => $request->input('myUsername'),
                'username_friend' => $request->input('username'),
                'is_friend' => 'accept',
            ]);
            return response()->json([
                'work' => 'Berhasil berteman'
            ]);
        }
    }

    public function getNotifications() {
        return response()->json([
            'friends' => Friend::with(['usersFriend'])->where('username',Auth::user()['username'])
               ->where(function ($query) {
                    $query->where('is_friend','accept')->orWhere('is_friend','reject');
               })->get(),
            'comments' => Auth::user()
        ]);
    }

    public function countFriends($user) {
        if ($user === Auth::user()['username']) {
            return response()->json([
                'countFriends' => count(Friend::where('username', Auth::user()['username'])
                    ->where('is_friend','accept')->get())
            ]);
        } else {
            return response()->json([
                'countFriends' => count(Friend::where('username', $user)
                    ->where('is_friend','accept')->get()),
            ]);
        }
    }
}
