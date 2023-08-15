import React from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'
import "./style.css"
import ChildCard from '../ChildCard'
import { useLocation, useNavigate } from "react-router-dom";
const ChildrenProgress = () => {
  const navigation = useNavigate();
	const location = useLocation();
  const base_location = location.pathname.split("/")[1];
  const courses = ["Youssef","Houssein"];
  const notificationCLicked = () => navigation(`/${base_location}/notifications`);
  return (
    <div className='flex'>
        <Sidebar items = {["Children","Messages", "Conferences"]} selected={"Children"} />
        <div className='parent-course-card flex column'>
          <div className="Navbar">
            <button className="navbar-button">Progress</button>
            <button className="navbar-button" onClick={notificationCLicked}>Notifications</button>
          </div>
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