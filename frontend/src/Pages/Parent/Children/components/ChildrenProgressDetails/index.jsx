import React, { useEffect, useState } from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'
import Navbar from '../../../../../Components/Common/Navbar'
import ChildrenProgressCard from '../ChildrenProgressCard'
import Header from '../Header'
import "./style.css"
import { useLocation, useNavigate } from 'react-router-dom'
const ChildrenProgressDetails = () => {
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
      navigation(`/${base_location}/ChildrenProgress`);
      setActiveTab("Progress")
    }
      
  
  }, [activeTab]);
  return (
    <div className='container flex'>
        <Sidebar items = {["Children","Messages", "Conferences"]} selected={"Children"} />
        <div className="details-container flex column">
        <Navbar items={["Progress", "Notifications"]}
            selected={"Progress"}
            onTabChanged={(tab) => {setActiveTab(tab)}}/>
          <Header title={"Course title"}/>
          <div className="flex spaceAround">
            <ChildrenProgressCard text={"Assignments"}/>
            <ChildrenProgressCard text={"Quizzes"}/>
            <ChildrenProgressCard text={"Attendances"}/>
          </div>
        </div>
    </div>
  )
}

export default ChildrenProgressDetails