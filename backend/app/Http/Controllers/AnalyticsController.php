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
            $course_completion = 0;
        } else if ( $end_date <= Carbon::now()) {
            $course_completion = 100;
        } else {
            $total_days = $start_date->diffInDays($end_date);
            $days_passed = Carbon::now()->diffInDays($start_date);
            $course_completion = ($days_passed / $total_days) * 100;
        }

        return $course_completion;
        
    }

    public function calculateAssignmentsCompletion($course_id){
        $course = Course::find($course_id);

        $total_assignments = $course->total_assignments;
        $total_assigned_assignments = Course::find($course_id)->assessments->where('assessment_type_id', '2')->count();

        $assignments_completion = ($total_assigned_assignments / $total_assignments) * 100;

        return $assignments_completion;
    }

    public function calculateQuizzesCompletion($course_id){
        $course = Course::find($course_id);

        $total_quizzes = $course->total_quizzes;
        $total_assigned_quizzes = Course::find($course_id)->assessments->where('assessment_type_id', '1')->count();

        $quizzes_completion = ($total_assigned_quizzes / $total_quizzes) * 100;

        return $quizzes_completion;
    }

    public function calculateStudentAssignmentsAverage($course_id, $student_id){
        $course = Course::find($course_id);
        $total_assigned_assignments = Course::find($course_id)->assessments->where('assessment_type_id', '2')->count();

        if ($total_assigned_assignments == 0){
            return 100;
        }

        $assignments = Assessment::where('course_id', $course_id)->where('assessment_type_id', '2')->get();

        $total_assignments_grade = 0;

        foreach ($assignments as $assignment){
            $grade = Grade::where('assessment_id', $assignment->id)->where('user_id', $student_id)->first();
            if ($grade){
                $total_assignments_grade += $grade->grade;
            }
        }

        $assignments_average = round(($total_assignments_grade / $total_assigned_assignments));

        return $assignments_average;
    }

    public function calculateStudentQuizzesAverage($course_id, $student_id){
        $course = Course::find($course_id);
        $total_assigned_quizzes = Course::find($course_id)->assessments->where('assessment_type_id', '1')->count();

        if ($total_assigned_quizzes == 0){
            return 100;
        }

        $quizzes = Assessment::where('course_id', $course_id)->where('assessment_type_id', '1')->get();

        $total_quizzes_grade = 0;

        foreach ($quizzes as $quiz){
            $grade = Grade::where('assessment_id', $quiz->id)->where('user_id', $student_id)->first();
            if ($grade){
                $total_quizzes_grade += $grade->grade;
            }
        }

        $quizzes_average = round(($total_quizzes_grade / $total_assigned_quizzes));

        return $quizzes_average;
    }

    public function calculateClassAssignmentsAverage($course_id){
        $course = Course::find($course_id);

        $students = Course::find($course_id)->students;

        $total_students = $students->count();

        $total_assignments_grade = 0;

        foreach ($students as $student){
            $total_assignments_grade += $this->calculateStudentAssignmentsAverage($course_id, $student->id);
        }

        $class_assignments_average = round(($total_assignments_grade / $total_students));

        return $class_assignments_average;

    }

    public function calculateClassQuizzesAverage($course_id){
        $course = Course::find($course_id);

        $students = Course::find($course_id)->students;

        $total_students = $students->count();

        $total_quizzes_grade = 0;

        foreach ($students as $student){
            $total_quizzes_grade += $this->calculateStudentQuizzesAverage($course_id, $student->id);
        }

        $class_quizzes_average = round(($total_quizzes_grade / $total_students));

        return $class_quizzes_average;

    }

    public function getTeacherPerformance($course_id){
        $course = Course::find($course_id);

        $class_assignments_average = $this->calculateClassAssignmentsAverage($course_id);
        $class_quizzes_average = $this->calculateClassQuizzesAverage($course_id);

        $teacher_performance = round(($class_assignments_average * 0.4) + ($class_quizzes_average * 0.6));

        return $teacher_performance;

    }


    public function getAllAnalytics($course_id){
        $course_completion = $this->calculateCourseCompletion($course_id);
        $assignments_completion = $this->calculateAssignmentsCompletion($course_id);
        $quizzes_completion = $this->calculateQuizzesCompletion($course_id);
        $teacher_performance = $this->getTeacherPerformance($course_id);
        $class_assignments_average = $this->calculateClassAssignmentsAverage($course_id);
        $class_quizzes_average = $this->calculateClassQuizzesAverage($course_id);

        $analytics = new \stdClass();

        $analytics->course_completion = $course_completion;
        $analytics->assignments_completion = $assignments_completion;
        $analytics->quizzes_completion = $quizzes_completion;
        $analytics->teacher_performance = $teacher_performance;
        $analytics->class_assignments_average = $class_assignments_average;
        $analytics->class_quizzes_average = $class_quizzes_average;

        return $analytics;
    }

    public function getCoursesAnalytics(){
        $courses = Course::with('teacher')->get();

        foreach( $courses as $course) {
            $course->analytics =  $this->getAllAnalytics($course->id);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'All courses with analytics retrieved successfully',
            'courses' => $courses,
        ]);

    }



}
