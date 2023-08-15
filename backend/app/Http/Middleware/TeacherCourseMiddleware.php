<?php

namespace App\Http\Middleware;

use App\Models\Course;
use Closure;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class TeacherCourseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        try {
            $user = Auth::user();
            if ($id = $request->route()->parameter('id')) {
                $courses = Course::all()->where("id", $id)->where("teacher_id", $user->id)->first();
                if ($courses) {
                    return $next($request);
                }
            } else if ($id = $request->course_id) {
                $courses = Course::all()->where("id", $id)->where("teacher_id", $user->id)->first();
                if ($courses) {
                    return $next($request);
                }
            } else {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Course ID Required',
                ], 422);
            }
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        return response()->json([
            'status' => 'error',
            'message' => 'Unauthorized',
        ], 401);
    }
}
