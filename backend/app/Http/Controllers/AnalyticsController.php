<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Assessment;
use App\Models\Grade;
use App\Models\User;
use Carbon\Carbon;

class AnalyticsController extends Controller
{
    public function calculateCourseCompletion($course_id){
        $course = Course::find($course_id);

        $start_date = Carbon::parse($course->start_date);
        $end_date = Carbon::parse($course->end_date);
        
        if ( $start_date >= Carbon::now()) {
            $completion_percentage = 0;
        } else if ( $end_date <= Carbon::now()) {
            $completion_percentage = 100;
        } else {
            $total_days = $start_date->diffInDays($end_date);
            $days_passed = Carbon::now()->diffInDays($start_date);
            $completion_percentage = ($days_passed / $total_days) * 100;
        }

        return $completion_percentage;
        
    }

    public function calculateStudentAssignmentsAverage($course_id, $student_id){
        $course = Course::find($course_id);
        $total_assigned_assignments = Course::find($course_id)->assessments->where('assessment_type_id', '2')->count();

        $assignments = Assessment::where('course_id', $course_id)->where('assessment_type_id', '2')->get();

        $total_assignments_grade = 0;

        foreach ($assignments as $assignment){
            $grade = Grade::where('assessment_id', $assignment->id)->where('user_id', $student_id)->first();
            if ($grade){
                $total_assignments_grade += $grade->grade;
            }
        }

        $assignment_average = round(($total_assignments_grade / $total_assigned_assignments));

        return $assignment_average;
    }


}
