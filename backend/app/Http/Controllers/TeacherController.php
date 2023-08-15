<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use App\Models\Course;
use App\Models\Material;
use App\Models\Assessment;
use App\Models\Meeting;
use App\Models\User;
use Carbon\Carbon;

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

    public function getCourses()
    {
        $user = Auth::user();
        
        $courses = Course::where("teacher_id", $user->id)->get();

        return response()->json([
            'status' => 'success',
            'courses' => $courses,
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
                'material' => $material,
            ], 200);
        } else {
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
            'material' => $material,
        ], 200);
    }

    public function createConference(Request $request)
    {

        $request->validate([
            'date_time' => 'required|date|after_or_equal:now',
            'email' => 'required|email|exists:users,email',
            'link' => 'required|string'
        ]);

        $host = Auth::user();
        $guest = User::where('email', $request->email)->first();

        $request->date_time = Carbon::parse($request->date_time)->format('Y-m-d H:i:s');

        $meeting = new Meeting;
        $meeting->host_id = $host->id;
        $meeting->guest_id = $guest->id;
        $meeting->meeting_link = $request->link;
        $meeting->date_time = $request->date_time;
        $meeting->save();
        return response()->json([
            'status' => 'success',
            'meeting' => $meeting
        ]);
    }

    public function getConferences()
    {
        $user = Auth::user();

        $meetings = Meeting::where('host_id', $user->id)->get();

        $formattedMeetings = $meetings->map(function ($meeting) {
            return [
                'name' => $meeting->guestname,
                'date' => $meeting->formatteddatetime,
                'link' => $meeting->meeting_link,
            ];
        });

        return response()->json([
            'status' => 'success',
            'meetings' => $formattedMeetings,
        ], 200);
    }


    public function getCourseData($course_id){
        $course = Course::find($course_id)->first();
        $course->material = Material::where('course_id', $course_id)->get();
        $course->meetings = Meeting::where('host_id', $course->teacher_id)->get();
        $course->assessments = Assessment::where('course_id', $course_id)->get();

        $course->students = $course->students()->with('parents')->get();
        
        return response()->json([
            'status' => 'success',
            'course' => $course,
        ], 200);
        
    }

}
