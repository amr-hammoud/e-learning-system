<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use App\Models\Course;
use App\Models\Material;

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
        } else {
            $courses = Course::where("teacher_id", $user->id)->get();
        }

        return response()->json([
            'status' => 'success',
            'data' => $courses,
        ], 200);
    }

    public function createMaterial(Request $request)
    {

        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'course_id' => 'required|integer|exists:courses,id',
        ]);

        if ($request->has('attachement')) {
            $attachment = $request->file('attachement');

            $attachment_name = time() . '_' . $attachment->getClientOriginalName();
            $attachment_path = 'material/' . $request->course_id . '/' . $attachment_name;

            $directoryPath = public_path('material/' . $request->course_id);
            if (!File::exists($directoryPath)) {
                File::makeDirectory($directoryPath, 0755, true);
            }

            file_put_contents(public_path($attachment_path), $attachment_name);

            $material = new Material();
            $material->title = $request->title;
            $material->description = $request->description;
            $material->attachment = $attachment_name;
            $material->course_id = $request->course_id;
            $material->save();

            return response()->json([
                'status' => 'success',
                'data' => $material,
            ], 200);
        }
        else{

        }
    }
}
