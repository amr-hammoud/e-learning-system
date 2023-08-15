import React from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'
import "./style.css"
import ParentCourseCard from '../ParentCourseCard'
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
						<ParentCourseCard 
            backgroundColor={Math.floor(Math.random() * (4 - 1 + 1)) + 1}
            text = {course}/>
					);
				})}
          </div>
        
        </div>
    </div>
  )
}

export default ChildrenProgress