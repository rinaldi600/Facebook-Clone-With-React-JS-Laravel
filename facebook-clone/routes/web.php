<?php

use App\Http\Controllers\SignUpUser;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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

Route::get('/{route?}',function(){
    return view('welcome');
});

Route::get('/{route?}/{userId}',function(){
    return view('welcome');
});

Route::post('/sign_up_user', [SignUpUser::class, 'getData']);
Route::post('/sign_in_user', [SignUpUser::class, 'getDataLoginUser']);
