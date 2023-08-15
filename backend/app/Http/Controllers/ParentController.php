<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Assessment;
use App\Models\Grade;
use App\Models\Message;
use App\Models\Course;
use App\Models\Session;
use App\Models\Attendance;
use App\Models\Notification;
use App\Models\NotificationStatus;
use App\Models\Meeting;

class ParentController extends Controller
{
    public function getStudentProgress(){
        $parent=Auth::user();
        $student=$parent->children->first();
        $student_id=$student->id;
        $courses= $student->courses->pluck('id','name');
        $courseNameWithProgress=[];
       
        $course_info=[];
        foreach ($courses as $courseName => $courseId) {
            $course = Course::find($courseId);
            $assessments = Assessment::where('course_id', $course->id)->get();
            $grades=[];
            foreach ($assessments as $ass) {
                $grade=Grade::where("assessment_id",$ass->id)->where("user_id",$student_id)->first();
                $grades[]=[
                    'assessment'=>$ass->title,
                    'grade'=> $grade->grade,                   
                ];
             }
            $course_info[] = [
                'course-name' => $course->name,
                'number-assignments-given' => $course->assessments->count(),
                'completed-assignments'=>count($grades),
                'grades' => $grades
            ];
        }
        return response()->json([
            'parent'=>$parent->first_name." " .$parent->last_name,
            'student'=>$student->first_name." ". $student->last_name,
            'info'=>$course_info
        ]);
    }    

    public function sendMessage(Request $request){
        $parent=Auth::user();
        $teacher=User::find($request->id);
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
                'time-sent-at'=>$message->created_at->addhours(3)->format('H:i:s')                
            ]);
        }
        else{
            return response()->json(['status'=>"failed"]);

        };        
    }

    public function getMessages(Request $request){
        $parent=Auth::user();
        $teacher=User::find($request->id);
        $messages=[];
        $m_sent=$parent->sender()->orderBy('created_at')->get();
        $m_received=$parent->receiver()->orderBy('created_at')->get();
        if($teacher){
            $message_sent=$parent->sender()->orderBy('created_at')->get();
            foreach ($message_sent as $m) {
                $messages[]=[
                    'type'=>'sender',
                    'message'=>$m->content,
                    'time'=>$m->created_at->addhours(3)->format('H:i:s')
                ];
            }
            $message_received=$parent->receiver()->orderBy('created_at')->get();
            foreach ($message_received as $m) {
                $messages[]=[
                    'type'=>'receiver',
                    'message'=>$m->content,
                    'time'=>$m->created_at->format('H:i:s')
                ];               
            }
            usort($messages, function ($a, $b) {
                return strtotime($a['time']) - strtotime($b['time']);
            });
            return response()->json([
                'parent'=>$parent->first_name. " ".$parent->last_name,
                'teacher'=>$teacher->first_name." ". $teacher->last_name,
                'messages'=>$messages
            ]);               
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

    public function scheduleMeeting(Request $request){
        $course=Course::where('id',$request->id)->first();
        $link=$course->meeting_link;
        $teacher_id=$course->teacher_id;
        $teacher=User::find($teacher_id);
        $meeting=new Meeting;
        $meeting->host_id=Auth::user()->id;
        $meeting->guest_id=$teacher_id;
        $meeting->meeting_link=$link;
        $meeting->date_time=$request->meeting_date;
        $meeting->save();
        $meeting->host_name=Auth::user()->first_name;
        $meeting->guest_name=$teacher->first_name . " ". $teacher->last_name;
        return response()->json([
            'status'=>'meeting scheduled successfully',
            'meeting details'=>$meeting                   
        ]);
    }
}