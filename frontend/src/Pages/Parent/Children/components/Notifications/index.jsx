import React, { useEffect, useState } from 'react'
import NotificationsCard from '../NotificationsCard'
import Sidebar from '../../../../../Components/Common/Sidebar'
import Navbar from '../../../../../Components/Common/Navbar'
import './style.css'
import { useLocation, useNavigate } from 'react-router-dom'
const Notifications = () => {
  const [activeTab, setActiveTab] = useState("Stream");
  const navigation = useNavigate();
  const location = useLocation();
useEffect(() => {
    console.log(activeTab);
    
    if(activeTab === "Notifications"){
      console.log("noti")
      
      const base_location = location.pathname.split("/")[1];
      navigation(`/${base_location}/notifications`);
      setActiveTab("Notifications")
    }
    else if (activeTab === "Progress"){
      const base_location = location.pathname.split("/")[1];
      navigation(`/${base_location}/ChildrenProgress`);
      setActiveTab("Progress")
    }
    

}, [activeTab]);
  return (
    <div className='flex'>
        <Sidebar items = {["Children","Messages", "Conferences"]} selected={"Children"} />
        <div className='notification-container flex column'>
        <Navbar items={["Progress", "Notifications"]}
            selected={"Notifications"}
            onTabChanged={(tab) => {setActiveTab(tab)}}/>
        <NotificationsCard text={"hellohellohellohell"} date={"23-12-2023"}/>
        </div>
        
    </div>
  )
}

export default Notifications