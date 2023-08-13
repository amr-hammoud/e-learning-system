<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\User;
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
}
