import React, { useEffect, useState } from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'
import Navbar from '../../../../../Components/Common/Navbar'
import "./style.css"
import ChildCard from '../ChildCard'
import { useLocation, useNavigate } from "react-router-dom";
const ChildrenProgress = () => {
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
  
  const courses = ["Youssef","Houssein"];

  return (
    <div className='flex'>
        <Sidebar items = {["Children","Messages", "Conferences"]} selected={"Children"} />
        <div className='parent-course-card flex column'>
        <Navbar items={["Progress", "Notifications"]}
            selected={"Progress"}
            onTabChanged={(tab) => {setActiveTab(tab)}}/>
          <div className="flex">
          {courses?.map((course) => {
					return (
						<ChildCard 
            backgroundColor={Math.floor(Math.random() * (4 - 1 + 1)) + 1}
            text = {course}
            navigate={"ChildrenProgressDetails"}
            />
            
					);
				})}
          </div>
        
        </div>
    </div>
  )
}

export default ChildrenProgress