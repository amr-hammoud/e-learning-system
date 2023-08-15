import React from "react";
import './style.css';

const Notification=({notification})=>{
	return (
        <div className="notif-body flex column white-bg roundedSmall">
            <div className="notif-body-info flex row">
                <div className="notif-title">
                    Notification
                </div>
                <div className="notif-date">
                    <span>At :  
                       {notification.time}</span>
                </div>
            </div>
            <div className="horizontal"></div>
            <div className="spacer-30"></div>
            <div className="notif-description">
                {notification.content}
            </div>
        </div>
    );
}
export default Notification;