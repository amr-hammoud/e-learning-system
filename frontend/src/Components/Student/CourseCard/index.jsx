import React from "react";
import './style.css';

const CourseCard=({course})=>{
	return (
    <div class="flex column course-card white-bg rounded ">
        <div className="course-info flex column">
            <div class="course-title flex column roundedSmall">
                <h2 className="white-color">
                {course.title}
                </h2>
            </div>
            <div class="course-subject">
                <p className="dark-gray">{course.subject}</p>
            </div>
    
        </div>
    </div>
    );
}
export default CourseCard;