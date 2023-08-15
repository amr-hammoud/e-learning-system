import React from "react";
import "./style.css";

const CourseEnrolledCard=({course})=>{
    console.log(course)
	return (
    <div class="flex column course-card white-bg rounded ">
        <div className="course-info flex column">
            <div class="course-title flex column roundedSmall">
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