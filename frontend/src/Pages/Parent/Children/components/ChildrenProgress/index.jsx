import React, { useEffect, useState } from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'
import Navbar from '../../../../../Components/Common/Navbar'
import "./style.css"
import ChildCard from '../ChildCard'
import { useLocation, useNavigate } from "react-router-dom";
const ChildrenProgress = () => {
  const [activeTab, setActiveTab] = useState("Stream");

  useEffect(() => {
      console.log(activeTab);
      //Add if else to render your desired component
      
  
  }, [activeTab]);
  const navigation = useNavigate();
	const location = useLocation();
  const base_location = location.pathname.split("/")[1];
  const courses = ["Youssef","Houssein"];
  const notificationCLicked = () => navigation(`/${base_location}/notifications`);
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