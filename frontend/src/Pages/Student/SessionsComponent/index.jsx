import React from "react";
import './style.css';
import Session from "../../../Components/Student/Session";
const SessionComponent=()=>{
    const session={
        "date":"2022-10-30",
        "time":"10:00",
        "link":"https://meet.google.com/abc123xyz"
    }
	return (
    <div class="course-stream-container primary-bg">
        <div className="flex column course-stream">
            <div className="stream-head rounded blue-bg white-color">
               <span>Course Name</span>
            </div>
            <div className="spacer-30"></div>
            <Session session={session}/>
            <Session session={session}/>
        </div>
    </div>
    );
}
export default SessionComponent;