import React from "react";
import './style.css';
import Progress from "../../../Components/Student/Progress";
const ProgressComponent=({course})=>{


    const percentage={
        "topic":"Assignments",
        "value":"45"
    }

	return (
    <div class="course-stream-container primary-bg">
        <div className="flex column course-stream">
            <div className="stream-head rounded blue-bg white-color">
               <span>{course.title}</span>
            </div>
            <div className="spacer-30"></div>
            <div className=" progress-data flex row">
                <Progress percentage={percentage} />
                <Progress percentage={percentage} />
                <Progress percentage={percentage} />
            </div>
        </div>
    </div>
    );
}
export default ProgressComponent;