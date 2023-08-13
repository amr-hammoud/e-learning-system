<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\User;
use App\Models\Submission;
use App\Models\Assessment;
use App\Models\DiscussionGroup;
use App\Models\GroupMessage;

use Carbon\Carbon;
use Auth;
class StudentController extends Controller
{
    //
    public function getAvailableCourses(){
        $courses = Course::all();
        $availabe_courses_array =[];
        foreach($courses as $course){
            $count =  $course->getUserenrollmentsCount();
            if($count < $course->max_enrollments){
                $teacher = User::find($course->teacher_id);
                $availabe_courses = [
                    "id" => $course->id,
                    "teacher" => $teacher->getFullNameAttribute(),
                    "name" => $course->name,
                    "subject" => $course->subject,
                    "description" => $course->description,
                    "start_date" => $course->start_date,
                    "end_date" => $course->end_date,
                ];
                $availabe_courses_array [] = $availabe_courses;
            }

        }
        return $availabe_courses_array;
    }
    public function enroll(Request $request){
        $user = Auth::user();
        $course = Course::find($request->course_id);

        $user->courses()->attach($course->id);
        return response()->json([
            "status" => "success",
        ]);
    }
    public function getMaterials(Request $request){
        $course = Course::find($request->course_id);
        return $course->materials;
    }

    public function completedAssessments(){
        $user = Auth::user();
        if($user){
            return $user->submission;
        }
        return response()->json([
            "status"=> "failed",
            "message"=>"no completed assessments",
        ]);
    }
    public function upcomingAssessments(Request $request){
        $user = Auth::user();

        $submittedAssessmentIds = $user->submission()->pluck('assessment_id')->toArray();

        $notSubmittedAssessments = Assessment::whereNotIn('id', $submittedAssessmentIds)->get();

        $upcomingAssessments = [];
        $missedAssessments = [];
        $currentDate = Carbon::now();
        foreach ($notSubmittedAssessments as $assessment) {
            if($assessment->due_date >= $currentDate){
                $upcomingAssessments[] = $assessment;
            }
            else{
                $missedAssessments[] = $assessment;
            }
        }
        return $upcomingAssessments;
    }
    public function getGrades(){
        $user = Auth::user();

        return $user->grades;
    }
    public function getGroupMessages(Request $request){
        $disscussion_group  = DiscussionGroup::where("course_id", $request->course_id)->first();
        
        $dscussion_messages = $disscussion_group->groupMessages;

        foreach($dscussion_messages as $message){
            return $message->with('user')->get();
        }
    }
    public function insertGroupMessage(Request $request){
        $request->validate([
            'content' => 'required|string',
        ]);
        $content = $request->content;
        $sender_id = Auth::user();
        $group_id = $request->group_id;

        $message = new GroupMessage();
        $message->content = $content;
        $message->sender_id = $sender_id;
        $message->group_id = $group_id;

    
        $message->save();

        return response()->json([
            "status" => "success",
        ]);
    }
}
