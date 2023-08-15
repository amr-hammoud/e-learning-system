import React from 'react'
import './style.css'
const NotificationsCard = ({text , date}) => {
  return (
    <div className='notification-card flex spaceBetween'>
        <div className='notification-text'>{text}</div>
        <div>{date}</div>
    </div>
  )
}

export default NotificationsCard