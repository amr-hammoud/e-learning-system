import React from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'
import ChildrenProgressBar from '../ChildrenProgressBar'
import Header from '../Header'
import './style.css'
const Assignments = () => {
  return (
    <div className='flex'>
      <Sidebar items = {["Children","Messages", "Conferences"]} selected={"Children"} />
      <div className='bar-container flex column'>
        <div className="Navbar">
            <button className="navbar-button">Progress</button>
            <button className="navbar-button">Notifications</button>
          </div>
          <Header title={"Assignments"}/>
          <div>
            <ChildrenProgressBar name={"First"} due_date={"23-8-2023"}/>
          </div>
      </div>
    </div>
  )
}

export default Assignments