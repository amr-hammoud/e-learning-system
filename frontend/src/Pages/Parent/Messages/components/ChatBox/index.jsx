import React from 'react'
import './style.css'
const ChatBox = ({text,state}) => {
  return (
    <div className={state == "sent" ?'box flex center wrap sent' : 'box flex center wrap receive'}>{text}</div>
  )
}

export default ChatBox