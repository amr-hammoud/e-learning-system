<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Course;

class TeacherController extends Controller
{
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

    public function courses($id = null)
    {
        $user = Auth::user();
        if ($id) {
            $courses = Course::all()->where("id", $id)->where("teacher_id", $user->id)->first();
            if (!$courses) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Course not found for this teacher'
                ], 404);
            }
        } else {
            $courses = Course::where("teacher_id", $user->id)->get();
        }

        return response()->json([
            'status' => 'success',
            'data' => $courses,
        ], 200);
    }
}
