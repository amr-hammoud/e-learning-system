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
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
            'role' => 'required|string|max:255',
        ]);

        $user = User::where('email', $request->email)->first();
        if ($user){
            return response()->json([
                'status' => 'error',
                'message' => 'Email already exists',
            ], 422);
        }

        $role = UserType::where('name', ucfirst($request->role))->first();
        if (!$role){
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid user type',
            ], 422);
        }

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name, 
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'user_type_id' => $role->id,
        ]);

        $token = Auth::login($user);
        $user->role = $role->name;

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

    public function updateAccount(Request $request, $id){
        $request->validate([
            'first_name' => 'string|max:255',
            'last_name' => 'string|max:255', 
            'email' => 'string|email|max:255',
            'password' => 'string|min:6',
        ]);

        $user = User::where('email', $request->email)->where('id', '!=', $id)->first();
        if ($user){
            return response()->json([
                'status' => 'error',
                'message' => 'Email already exists',
            ], 422);
        }

        $user = User::find($id);
        if (!$user){
            return response()->json([
                'status' => 'error',
                'message' => 'User not found',
            ], 404);
        }

        $user->update([
            'first_name' => $request->first_name ? $request->first_name : $user->first_name,
            'last_name' => $request->last_name ? $request->last_name : $user->last_name, 
            'email' => $request->email ? $request->email : $user->email,
            'password' => $request->password ? Hash::make($request->password) : $user->password,
        ]);

        $token = Auth::login($user);

        return response()->json([
            'status' => 'success',
            'message' => 'User updated successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function deleteAccount($id){
        $user = User::find($id);
        if (!$user){
            return response()->json([
                'status' => 'error',
                'message' => 'User not found',
            ], 404);
        }

        $user->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'User deleted successfully',
        ]);
    }

    public function getAllUsers(){
        $users = User::with('userType:id,name')->get();

        return response()->json([
            'status' => 'success',
            'users' => $users,
        ]);
    }

    public function getUsersByType($type){
        $role = UserType::where('name', ucfirst($type))->first();
        if (!$role){
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid user type',
            ], 422);
        }

        $users = User::where('user_type_id', $role->id)->get();

        return response()->json([
            'status' => 'success',
            'users' => $users,
        ]);
    }
   
}
