<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
    public function login(Request $request)
    {
        $fields = $request->validate([
            "email" => "required|email",
            "password" => "required|string"
        ]);
        $user = User::where("email", $fields["email"])->first();
        if (!$user || Hash::check($fields["password"], $user->password)) {
            return response()->json([
                "message" => "Wrong username or password!"
            ]);
        }

        $token = $user->createToken("mytokenapp")->plainTextToken;
        $response = [
            "user" => $user,
            "token" => $token,
        ];
        return response()->json($response, 201);
    }
    public function logout(Request $request)
    {
        // auth()->user()->token()->delete();
        $request->user()->currentAccessToken()->delete();
        return response()->json(
            [
                "message" => "logout successful!"
            ]
        );
    }
}