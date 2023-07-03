<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;
use Validator;

class StudentController extends Controller
{
    //
    public function index()
    {
        $students = Student::all();
        if ($students->count() > 0) {
            $data = [
                'status' => 200,
                'students' => $students
            ];
            return response()->json($data, 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No data found'
            ], 404);
        }
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:191',
            'email' => 'required|string|email',
            'course' => 'required|string|max:191',
            'phone' => 'required|digits:10',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $student = Student::create([
                'name' => $request->name,
                'email' => $request->email,
                'course' => $request->course,
                'phone' => $request->phone,
            ]);
            if ($student) {
                return response()->json([
                    'status' => 200,
                    'message' => 'Student add successfully!'
                ], 200);
            } else {
                return response()->json([
                    'status' => 500,
                    'message' => 'Something went wrong!'
                ], 500);
            }
        }

    }
    public function show($id)
    {
        $sudent = Student::find($id);
        if ($sudent) {
            return response()->json([
                "status" => 200,
                "student" => $sudent,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Student Found!'
            ], 404);
        }
    }
}