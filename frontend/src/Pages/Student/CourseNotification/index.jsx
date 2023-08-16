import React from "react";
import './style.css';
import Notification from "../../../Components/Student/Notification";
const NotificationComponent=()=>{
    
    const notification={
        "date":"2022-10-30",
        "time":"10:00",
        "content":"A new Airbnb workshop will be held today"
    }
	return (
    <div class="course-stream-container primary-bg">
        <div className="flex column course-stream">
            <div className="stream-head rounded blue-bg white-color">
               <span>Course Name</span>
            </div>
            <div className="spacer-30"></div>
            <Notification notification={notification} />
        </div>
    </div>
    );
}
export default NotificationComponent;