import React from "react";
import './style.css';

const CourseStream=({ass})=>{
	return (
        <div className="stream-body flex column white-bg roundedSmall">
            <div className="stream-body-top flex row">
                <div className="stream-title">
                    {ass.title}
                </div>
                <div className="stream-date">
                    <span>Date: {ass.submissionDate}</span>
                </div>
            </div>
            <div className="horizontal"></div>
            <div className="spacer-30"></div>
            <div className="stream-description">
                {ass.description}
            </div>
        </div>
    );
}
export default CourseStream;