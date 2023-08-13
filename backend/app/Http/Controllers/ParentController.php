<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Grade;
use App\Models\Message;
use App\Models\Course;
use App\Models\Session;
use App\Models\Attendance;
use App\Models\Notification;
use App\Models\NotificationStatus;

class ParentController extends Controller
{
    public function getStudentProgress($parent_name,$student_name,$course_name){
        $auth_parent=Auth::user();
        $full_name= explode(" ", $student_name);
        $first_name=$full_name[0];
        $last_name=$full_name[1];
        $student= User::where("first_name",$first_name)
                      ->where("last_name",$last_name)
                      ->first();
        $parent=User::where("first_name",$parent_name)
                    ->first();
        if($auth_parent->id===$parent->id){
            $parent_id=$student->parents->where("id",$parent->id)->first()->id;
            if($parent->id===$parent_id){
                $total_grades =$student->grades()->get()->pluck('grade');
                    $total_submissions=$student->submission()->get()->count();
                    return response()->json([
                        'parent'=>$parent_name,
                        'student_fname:'=>$first_name,
                        'student_lname:'=>$last_name,
                        'course:'=>$course_name,
                        'total grades'=>$total_grades,
                        'total-submissions'=>$total_submissions
                    ]);
            }    
        }       
        else{
            return response()->json([
                'result'=>"An error has occured"]);}
    }

    public function sendMessage(Request $request){
        $parent=Auth::user();
        $teacher=User::where("first_name",$request->first_name)->where("last_name",$request->last_name)->first();
        if($teacher){
            $message=new Message;
            $message->sender_id=$parent->id;            
            $message->receiver_id=$teacher->id;
            $message->content=$request->message;
            $message->save();
            
            return response()->json([
                'parent'=>$parent->first_name. " ".$parent->last_name,
                'teacher'=>$teacher->first_name." ". $teacher->last_name,
                'message sent'=>$message->content,
                'date-sent-at'=>$message->created_at->format('d.m.Y'),
                'time-sent-at'=>$message->created_at->format('H:i:s')                
            ]);
        }
        else{
            return response()->json(['status'=>"failed"]);

        };        
    }

    public function getMessages(Request $request){
        $parent=Auth::user();
        $teacher=User::where("first_name",$request->first_name)->where("last_name",$request->last_name)->first();
        if($teacher){
            $message_sent=$parent->sender()->orderBy('created_at')->pluck('content');
            $message_received=$parent->receiver()->orderBy('created_at','asc')->pluck('content');
            return response()->json([
                'parent'=>$parent->first_name. " ".$parent->last_name,
                'teacher'=>$teacher->first_name." ". $teacher->last_name,
                'message sent'=>$message_sent,
                'message received'=>$message_received]);               
        } else{
        return response()->json(['status'=>"failed"]);
        };     
    }

    public function viewSchedule(Request $request){
        $parent=Auth::user();
        $student_id=$parent->children->first()->id;
        $student = User::find($student_id);
        $courses= $student->courses->pluck('id','name');
        $courseNameWithSessions=[];
        foreach ($courses as $courseName => $courseId) {
           $course = Course::with('sessions')->find($courseId);
            $courseNameWithSessions[] = [
                'course_name' => $course->name,
                'sessions' => $course->sessions
            ];
        }       
        return response()->json([
            'student_id'=>$student_id,
            'student'=>$student->first_name." ".$student->last_name,
            'sessions'=> $courseNameWithSessions]);
    }
    public function viewAttendance(Request $request){
        $parent=Auth::user();
        $student=$parent->children->first();
        $student_id=$student->id;
        $courses= $student->courses->pluck('id','name');
        $courseNameWithAttendance=[];
        foreach ($courses as $courseName => $courseId) {
            $course = Course::find($courseId);
            $sessions = Session::where('course_id', $course->id)->get();

            foreach ($sessions as $session) {
                $nb_sessions_held=Session::where("course_id",$course->id)->count();
                $attendances = Attendance::where("user_id", $student_id)->where("session_id",$session->id)->where("attended",1)->count();
                $courseNameWithAttendance[] = [
                    'course_name' => $course->name,
                    "nb_sessions_held"=>$nb_sessions_held,
                    'attendance' => $attendances
                ];
                }
            }        
        return response()->json([
            'student_id'=>$student_id,
            'student'=>$student->first_name." ".$student->last_name,
            'attendance'=>$courseNameWithAttendance]);
    }

    public function viewNotifications(){
        $parent=Auth::user();
        $student_id=$parent->children->first()->id;
        $student = User::find($student_id);
        $courseNameWithNotification=[];
        $courses= $student->courses->pluck('id','name');
        foreach ($courses as $courseName => $courseId) {
            $course = Course::find($courseId);
            $teacher=$course->teacher->first_name ." ". $course->teacher->last_name;
            
            $notification=Notification::all()->where("course_id",$courseId);
            $courseNameWithNotification[] = [
                'course_name' => $course->name,
                'teacher name'=>$teacher,
                'notification' => $notification
            ]; 
            foreach($notification as $n){
                $read_notification=NotificationStatus::where("parent_id",Auth::user()->id)->where("notification_id",$n->id)->first();  
                $read_notification->is_read=1;
                $read_notification->save();   
            }
        }           
        return response()->json([
        'status'=>'Marked as read successfully', 
        'notifications'=>$courseNameWithNotification]);
    }
}