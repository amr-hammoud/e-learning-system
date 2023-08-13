<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Grade;
use App\Models\Message;

class ParentController extends Controller
{
    public function getStudentProgress($parent_name,$student_name,$course_name){
        $full_name= explode(" ", $student_name);
        $first_name=$full_name[0];
        $last_name=$full_name[1];
        $student= User::where("first_name",$first_name)
                      ->where("last_name",$last_name)
                      ->first();
        $parent=User::where("first_name",$parent_name)
                    ->first();
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
        else{
            return response()->json([
                'result'=>"An error has Occured"]);}
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
            return response()->json(['state'=>"false"]);

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
        return response()->json(['state'=>"false"]);
        }; 
    
    }
}