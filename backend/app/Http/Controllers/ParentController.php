<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Grade;

class ParentController extends Controller
{
    public function getStudentProgress($parent_name,$student_name,$course_name){
        $full_name= explode(" ", $student_name);
        $first_name=$full_name[0];
        $last_name=$full_name[1];
        $student= User::where("first_name",$first_name)->where("last_name",$last_name)->first();
        $parent=User::where("first_name",$parent_name)->first();
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
}