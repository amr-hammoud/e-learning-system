import React from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'
import "./style.css"
import ChildCard from '../ChildCard'
const ChildrenProgress = () => {
  const courses = ["Youssef","Houssein"];
  return (
    <div className='flex'>
        <Sidebar items = {["Children","Messages", "Conferences"]} selected={"Children"} />
        <div className='parent-course-card flex column'>
          <div className="Navbar">
            <button className="navbar-button">Progress</button>
            <button className="navbar-button">Notifications</button>
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