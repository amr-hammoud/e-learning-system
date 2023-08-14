import React from "react";
import './style.css';
import Button from "../../Base/Button/index.jsx";

const  CourseCardDetails=({course})=> {
	return (


    <div class="flex column course-card-details primary-bg rounded ">
        <div className="course-datails-info flex column">
            <div class="course-details-title flex column roundedSmall">
                <h2 className="white-color">
                {course.title}
                </h2>
                <div class="course-details-subject">
                <p className="white-color">{course.subject}</p>
                </div>
            </div>
           
            <div className="course-details-description">
            {course.description}
            </div>
            <div className="spacer-30"></div>
            <div className="spacer-30"></div>
            <div className="course-details flex row">
                <div className="nb-ass">
                {course.ass} Assignments
                </div>
                <div className="nb-quiz">
                {course.quizz} Quizzes
                </div>
                <div className="nb-session">
                {course.session} Sessions
                </div>
            </div>
            <div className="spacer-30"></div>
            <div className="course-enroll flex center">
                <Button 
                 color={"blue-bg"}
                 textColor={"white-color"}
                 text={"Enroll"}
                />
            </div>
        </div>
    </div>
    );
}
export default CourseCardDetails;