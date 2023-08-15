import React from "react";
import './style.css';
import MessageContainer from "../../../Components/Student/MessageContainer";
import Sidebar from "../../../Components/Common/Sidebar";
const MessageComponent=()=>{
    const course={"title": "Course Name"};

    return(
        <div className="page flex">
        <Sidebar
				items={["My Courses", "Browse", "Messages", "Conferences"]}
				selected={"My Courses"}
			/>
            <div class="course-stream-container primary-bg">
            <div className="flex column course-stream">
                <div className="stream-head rounded blue-bg white-color">
                <span>{course.title}</span>
                </div>
                <div className="spacer-30"></div>
                <MessageContainer />
            </div>
        </div>
        </div> 
        
    
    );
}
export default MessageComponent;
