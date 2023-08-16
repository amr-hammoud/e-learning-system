import React from "react";
import "./style.css";
import Message from "../Message";
import Button from "../../Base/Button";
import MessageSent from "../MessageSent/indx";
import MessageReceived from "../MessageReceived";

const MessageContainer=()=>{
	return (
    <div class="flex column msg-container white-bg rounded ">
        <div className="msg-rows flex column ">
            <div class="msg-row flex column">
                <MessageSent />
                <MessageSent />
                <MessageReceived/>

            </div>  
        </div>
        <div className="input-box flex row">
            <input type="text" placeholder="Type your message here..." />
            <div className="btnSend">
            <Button 
             color={"white-bg"}
             textColor={"blue-bg"}
             text={"Send"}              
             />
            </div>
        </div>
    </div>
    );
}
export default MessageContainer;