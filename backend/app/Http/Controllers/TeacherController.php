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
    //TODO: Assessment CRUD
    //TODO: Session CRUD
    //TODO: Attendance CRUD
    //TODO: Discussion Group
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
            'attachment' => 'required|file',
            'course_id' => 'required|integer|exists:courses,id',
        ]);

        if ($request->has('attachment')) {
            $attachment = $request->file('attachment');
            $attachment_name = time() . '_' . Str::replace(' ', '_', $attachment->getClientOriginalName());
            $attachment_path = 'material/' . $request->course_id . '/' . $attachment_name;
            $attachment->storeAs($attachment_path, $attachment_name, 'public');

            $material = new Material();
            $material->title = $request->title;
            $material->description = $request->description;
            $material->attachment = $material->attachment = $attachment_path . '/' . $attachment_name;;
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

    public function getMaterial(Request $request)
    {

        $request->validate([
            'id' => 'numeric|exists:materials,id'
        ]);

        if ($request->id) {
            $material = Material::find($request->id)->where("course_id", $request->course_id)->first();

        } else {
            $material = Material::orderBy('created_at', 'desc')->get();
        }

        return response()->json([
            'status' => 'success',
            'data' => $material,
        ], 200);
        
    }
}
