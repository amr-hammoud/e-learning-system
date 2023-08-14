<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\User;
use Carbon\Carbon;

class CourseController extends Controller
{
    public function getAllCourses(){
        $courses = Course::with('teacher')->get();

        return response()->json([
            'status' => 'success',
            'courses' => $courses,
        ]);
    }

    public function createCourse(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'max_enrollments' => 'required|integer',
            'total_sessions' => 'required|integer',
            'total_assignments' => 'required|integer',
            'total_quizzes' => 'required|integer',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'meeting_link' => 'required|string|max:255',
            'teacher_id' => 'required|integer',
        ]);

        $user_id = $request->teacher_id;
        $user = User::find($user_id);
        if (!$user || $user->user_type_id != 2){
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid teacher id',
            ], 422);
        }

        $start_date = Carbon::parse($request->start_date);
        $end_date = Carbon::parse($request->end_date);

        $course = Course::create([
            'name' => $request->name,
            'subject' => $request->subject,
            'description' => $request->description,
            'max_enrollments' => $request->max_enrollments,
            'total_sessions' => $request->total_sessions,
            'total_assignments' => $request->total_assignments,
            'total_quizzes' => $request->total_quizzes,
            'start_date' => $start_date,
            'end_date' => $end_date,
            'meeting_link' => $request->meeting_link,
            'teacher_id' => $request->teacher_id,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Course created successfully',
            'course' => $course,
        ]);
    }

    public function updateCourse(Request $request, $id){
        $request->validate([
            'name' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'max_enrollments' => 'required|integer',
            'total_sessions' => 'required|integer',
            'total_assignments' => 'required|integer',
            'total_quizzes' => 'required|integer',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'meeting_link' => 'required|string|max:255',
            'teacher_id' => 'required|integer',
        ]);

        $user_id = $request->teacher_id;
        $user = User::find($user_id);
        if (!$user || $user->user_type_id != 2){
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid teacher id',
            ], 422);
        }

        $start_date = Carbon::parse($request->start_date);
        $end_date = Carbon::parse($request->end_date);

        $course = Course::find($id);
        if (!$course){
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid course id',
            ], 422);
        }

        $course->update([
            'name' => $request->name,
            'subject' => $request->subject,
            'description' => $request->description,
            'max_enrollments' => $request->max_enrollments,
            'total_sessions' => $request->total_sessions,
            'total_assignments' => $request->total_assignments,
            'total_quizzes' => $request->total_quizzes,
            'start_date' => $start_date,
            'end_date' => $end_date,
            'meeting_link' => $request->meeting_link,
            'teacher_id' => $request->teacher_id,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Course updated successfully',
            'course' => $course,
        ]);
    }

    public function deleteCourse($id){
        $course = Course::find($id);
        if (!$course){
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid course id',
            ], 422);
        }

        $course->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Course deleted successfully',
        ]);
    }

}