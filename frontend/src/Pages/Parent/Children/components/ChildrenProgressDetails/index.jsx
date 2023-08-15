import React from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'
import ChildrenProgressCard from '../ChildrenProgressCard'
import "./style.css"
const ChildrenProgressDetails = () => {
  return (
    <div className='container flex'>
        <Sidebar items = {["Children","Messages", "Conferences"]} selected={"Children"} />
        <div className="details-container flex column">
        <div className="Navbar">
            <button className="navbar-button">Progress</button>
            <button className="navbar-button">Notifications</button>
          </div>
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