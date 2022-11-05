<?php

use App\Http\Controllers\SignUpUser;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::post('/sign_up_user', [SignUpUser::class, 'getData']);
Route::post('/sign_in_user', [SignUpUser::class, 'getDataLoginUser']);

Route::middleware('isLogin')->group(function () {
    Route::get('/home', [\App\Http\Controllers\Home::class, 'getUser']);
    Route::get('/get_detail_user', [\App\Http\Controllers\Home::class, 'getUserDetail']);
    Route::post('/search_user', [\App\Http\Controllers\Home::class, 'searchUser']);
    Route::post('/logout', [\App\Http\Controllers\Home::class, 'logout']);
    Route::post('/add_friend', [\App\Http\Controllers\Home::class, 'addFriend']);
    Route::get('/user_profile/{user}', [\App\Http\Controllers\Home::class, 'viewUser']);
    Route::get('/user/{user}', [\App\Http\Controllers\Home::class, 'userView']);
    Route::get('/check_friend/{user}/{friend}', [\App\Http\Controllers\Home::class, 'checkFriend']);
    Route::get('/check_request_friend', [\App\Http\Controllers\Home::class, 'requestFriend']);
    Route::post('/confirm_or_reject_friend', [\App\Http\Controllers\Home::class, 'confirmFriend']);
    Route::get('/{user}', [\App\Http\Controllers\Home::class, 'myUserView']);
    Route::get('/get_my_posts/{user}', [\App\Http\Controllers\Home::class, 'myPost']);
    Route::post('/create_status_user', [\App\Http\Controllers\Home::class, 'getStatusUser'])->middleware('XssSanitizer');
});

