import React from "react";
import "./style.css";

const Message=()=>{
	return (
    <div class="flex column msg-card primary-bg rounded ">
        <div className="msg-info flex column roundedSmall">
            <div class="msg-content ">
                <span></span>
                Hello there
            </div>
            <div class="msg-time flex">
                <span className="dark-gray">19:000</span>
            </div>    
        </div>
    </div>
    );
}
export default Message;