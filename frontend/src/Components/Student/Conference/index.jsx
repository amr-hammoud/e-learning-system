import React from "react";
import './style.css';

const Conference=({meeting})=>{
	return (
        <div className="meeting-info flex row primary-bg rounded center">
            <div class="meeting-date flex center">
                <span>{meeting.date}</span>
                <span>{meeting.teacher}</span>
                <span className="meet_link">{meeting.link}</span>
            </div>
        </div>
    
    );
}
export default Conference;