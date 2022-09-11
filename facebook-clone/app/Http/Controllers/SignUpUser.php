<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class SignUpUser extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function getData(Request $request) {
        $validator = Validator::make($request->all(), [
            'username' => 'required|unique:users,username|min:3|alpha_dash',
            'name' => 'required|min:3|regex:/^[\pL\s\-]+$/u',
            'email' => 'required|email:rfc,dns|unique:users,email',
            'photo_profile' => 'file|image|max:2048',
            'password' => 'required|min:8|string',
        ],[
            'username.required' => 'Kolom wajib diisi',
            'username.unique' => 'Username sudah ada',
            'username.min' => 'Username minimal 3 karakter',
            'username.alpha_dash' => 'Username tidak valid',
            'name.required' => 'Kolom wajib diisi',
            'name.min' => 'Nama minimal 3 karakter',
            'name.regex' => 'Nama tidak valid',
            'email.required' => 'Kolom wajib diisi',
            'email.email' => 'Email tidak valid',
            'email.unique' => 'Email sudah ada',
            'photo_profile.file' => 'Kolom wajib diisi',
            'photo_profile.image' => 'Wajib harus gambar',
            'photo_profile.max' => 'Gambar maksimal 2MB',
            'password.required' => 'Kolom wajib diisi',
            'password.min' => 'Password minimal 8 karakter',
            'password.string' => 'Password tidak valid',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json([
                'errors' => array(
                    'username' => $errors->first('username'),
                    'name' => $errors->first('name'),
                    'email' => $errors->first('email'),
                    'photo_profile' => $errors->first('photo_profile'),
                    'password' => $errors->first('password'),
                )
            ]);
        } else {


            return response()->json([
                'success' => 'Akun berhasil dibuat',
            ]);



//            $request->file('photo_profile')->storeAs('photo_profile', $request->file('photo_profile')->hashName(),'public');
//            User::create([
//                'id_user' => 'USER - ' . uniqid(),
//                'username' => $request->input('username'),
//                'name' => $request->input('name'),
//                'photo_profile' => Storage::url('photo_profile/'.$request->file('photo_profile')->hashName()),
//                'password' => Hash::make($request->input('password'))
//            ]);
//            return response()->json([
//                'success' => 'Akun berhasil dibuat',
//            ]);
        }
    }
}