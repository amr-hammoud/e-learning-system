import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const CourseEnrolledCard=({course})=>{
    const navigate = useNavigate();
    console.log(course)
	return (
    <div class="flex column course-card white-bg rounded "  onClick={()=>navigate(`/student/my courses/course/stream/${course.id}`)}>
        <div className="course-info flex column">
            <div className="course-title flex column roundedSmall">
                <h2 className="white-color">
                {course.name}
                </h2>
            </div>
            <div class="course-subject">
                <p className="dark-gray">{course.subject}</p>
            </div>
            {/* <div class="course-subject">
                <p className="dark-gray">50% Completeion</p>
            </div> */}
    
        </div>
    </div>
    );
}
export default CourseEnrolledCard;