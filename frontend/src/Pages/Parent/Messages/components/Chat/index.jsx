import React from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'
import ChatBox from '../ChatBox'
import './style.css'
const Chat = () => {
  return (
    <div className='flex'>
        <Sidebar items = {["Children","Messages", "Conferences"]} selected={"Messages"} />
        <div className='chat-container flex column spaceBetween'>
            <div className="header flex">Teacher Name</div>
            <div className="chat flex column">
                <ChatBox text={"HIi"} state={"sent"}/>
                <ChatBox text={"HIiHIiHIiHIiHIiHIiHIiHIiHIiHIiHIiHIiHIi"} state={"receive"}/>
            </div>
        </div>
    </div>
  )
}

export default Chat