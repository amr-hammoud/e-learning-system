<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Course;

class TeacherController extends Controller
{
    //TODO: Get Single Course
    //TODO: Material CRUD
    //TODO: Assessment CRUD
    //TODO: Session CRUD
    //TODO: Attendance CRUD
    //TODO: Discussion Group
    //TODO: Course People
    //TODO: Chats & Messages
    //TODO: Student Submissions
    //TODO: Student Single Submission
    //TODO: Grade & Feedback
    //TODO: Conferences CRUD

    public function courses(Request $request)
    {
        if ($request->id) {
            $courses = Course::where("id", $request->id)->get();
        } else {
            $user = Auth::user();
            $courses = Course::where("teacher_id", $user->id)->get();
        }

        return response()->json([
            'status' => 'success',
            'data' => $courses,
        ], 200);
    }
}
