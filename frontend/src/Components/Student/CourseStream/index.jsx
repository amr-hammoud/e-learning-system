import React from "react";
import './style.css';
import { useNavigate } from "react-router-dom";
    
const CourseStream=({stream})=>{
    const navigate = useNavigate();

	return (
        <div className="stream-body flex column white-bg roundedSmall" onClick={()=>{navigate(`/student/my courses/course/classwork/assessment/${stream.id}`)}}>
            <div className="stream-body-top flex row">
                <div className="stream-title">
                    {stream.title}
                </div>
                <div className="stream-date">
                    <span>Date: {stream.due_date}</span>
                </div>
            </div>
            <div className="horizontal"></div>
            <div className="spacer-30"></div>
            <div className="stream-description">
                {stream.description}
            </div>
        </div>
    );
}
export default CourseStream;