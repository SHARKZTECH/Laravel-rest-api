<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            "name" => "required|string",
            "email" => "required|email|unique:users",
            "password" => "required|string|confirmed"
        ]);

        $user = User::create([
            "name" => $fields["name"],
            "email" => $fields["email"],
            "password" => bcrypt($fields["password"]),
        ]);

        $token = $user->createToken("mytokenapp")->plainTextToken;
        $response = [
            "user" => $user,
            "token" => $token,
        ];
        return response()->json($response, 201);
    }
}