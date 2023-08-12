<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserType;


class UserController extends Controller{

    public function createAccount(Request $request){
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255', 
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'user_type' => 'required|string|max:255',
        ]);

        $user = User::where('email', $request->email)->first();
        if ($user){
            return response()->json([
                'status' => 'error',
                'message' => 'Email already exists',
            ], 422);
        }

        $user_type = UserType::where('name', ucfirst($request->user_type))->first();
        if (!$user_type){
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid user type',
            ], 422);
        }

        $user_type_id = UserType::where('name', $user_type)->first();

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name, 
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'user_type_id' => $user_type_id,
        ]);

        $token = Auth::login($user);
        
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }
    
   
}
