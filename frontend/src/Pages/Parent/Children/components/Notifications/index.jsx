import React from 'react'
import NotificationsCard from '../NotificationsCard'
import Sidebar from '../../../../../Components/Common/Sidebar'
import './style.css'
const Notifications = () => {
  return (
    <div className='flex'>
        <Sidebar items = {["Children","Messages", "Conferences"]} selected={"Children"} />
        <div className='notification-container flex column'>
        <div className="Navbar">
            <button className="navbar-button">Progress</button>
            <button className="navbar-button">Notifications</button>
          </div>
        <NotificationsCard text={"hellohellohellohell"} date={"23-12-2023"}/>
        </div>
        
    </div>
  )
}

export default Notifications