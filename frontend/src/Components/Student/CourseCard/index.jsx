import React from "react";
import './style.css';

function CourseCard() {
	return (
    <div class="flex column course-card white-bg rounded ">
        <div className="course-info flex column">
            <div class="course-title flex column roundedSmall">
                <h2 className="white-color">
                COURSE TITLE
                </h2>
            </div>
            <div class="course-subject">
                <p className="dark-gray">Course subject</p>
            </div>
    
        </div>
    </div>
    );
}
export default CourseCard;