import React from "react";
import './style.css';

const Session=({session})=>{
	return (
        <div className="session-content flex center">
            <div className="session-info flex row white-bg rounded center">
                <div className="session-date flex center">
                    <span>{session.date} -{ session.time}</span>
                    <span className="session_link blue-bg rounded">
                        <a href={session.link} className="white-color">Meeting Link</a>
                    </span>
                </div>
            </div>
        </div>
    );
}
export default Session;