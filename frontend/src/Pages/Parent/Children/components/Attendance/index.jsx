import React, { useEffect, useState } from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'
import Navbar from '../../../../../Components/Common/Navbar'
import ChildrenProgressBar from '../ChildrenProgressBar'
import Header from '../Header'
import "./style.css"
import { useLocation, useNavigate } from 'react-router-dom'
const Attendances = () => {
  const [activeTab, setActiveTab] = useState("Stream");
  const navigation = useNavigate();
	const location = useLocation();
  useEffect(() => {
    if(activeTab === "Notifications"){
      console.log("noti")
      
      const base_location = location.pathname.split("/")[1];
      navigation(`/${base_location}/notifications`);
      setActiveTab("Notifications")
    }
    else if (activeTab === "Progress"){
      const base_location = location.pathname.split("/")[1];
      navigation(`/${base_location}/Attendances`);
      setActiveTab("Progress")
    }
      
      
  
  }, [activeTab]);
  return (
    <div className='flex'>
      <Sidebar items = {["Children","Messages", "Conferences"]} selected={"Children"} />
      <div className='bar-container flex column'>
      <Navbar items={["Progress", "Notifications"]}
            selected={"Progress"}
            onTabChanged={(tab) => {setActiveTab(tab)}}/>
          <Header title={"Attendances"}/>
          <div>
            <ChildrenProgressBar name={"First"} presence={"absent"}/>
          </div>
      </div>
    </div>
  )
}

export default Attendances