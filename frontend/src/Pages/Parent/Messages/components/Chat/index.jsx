import React, { useEffect, useState } from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'
import ChatBox from '../ChatBox'
import axios from "axios"
import './style.css'
const Chat = () => {
  const [messageInput, setMessageInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  
  const handleSendMessage = async () => {
    if (messageInput.trim() === '') {
      return;
    }

    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
      const response = await axios.post('http://127.0.0.1:8000/api/parent/message-teacher', {
        id: 6, 
        message: messageInput,
      });
      console.log(response.data.message_sent);
      setChatMessages(response.data.messages_sent);
      setMessageInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  useEffect(() => {
    handleSendMessage();
  }, []);
  return (
    <div className='flex'>
        <Sidebar items = {["Children","Messages", "Conferences"]} selected={"Messages"} />
        <div className='chat-container flex column'>
            <div className="header flex">Teacher Name</div>
            <div className="chat flex column">
            {chatMessages.map((message, index) => (
            <ChatBox key={index} text={message.content} state={"sent"} />
          ))}
                
            </div>
            <div className='input-container flex'>
            <input  
            type="text"
            className='box-input'
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            />
            <button className='send-button' onClick={handleSendMessage}>Send</button>
            </div>
            
        </div>
    </div>
  )
}

export default Chat