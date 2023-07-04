<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Protected Routes
Route::group(["middleware" => ["auth:sanctum"]], function () {
    Route::post("/logout", [AuthController::class, 'logout']);

    Route::post("/students", [StudentController::class, 'store']);
    Route::put("/students/{id}", [StudentController::class, 'update']);
    Route::delete("/students/{id}", [StudentController::class, 'destroy']);
});


Route::post("/register", [AuthController::class, 'register']);
Route::post("/login", [AuthController::class, 'login']);

Route::get("/students", [StudentController::class, 'index']);
Route::get("/students/{id}", [StudentController::class, 'show']);
Route::get("/students/{id}/edit", [StudentController::class, 'edit']);