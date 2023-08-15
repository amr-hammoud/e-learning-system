import React from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'
import ChildrenProgressBar from '../ChildrenProgressBar'
import Header from '../Header'
import "./style.css"
const Attendances = () => {
  return (
    <div className='flex'>
      <Sidebar items = {["Children","Messages", "Conferences"]} selected={"Children"} />
      <div className='bar-container flex column'>
        <div className="Navbar">
            <button className="navbar-button">Progress</button>
            <button className="navbar-button">Notifications</button>
          </div>
          <Header title={"Attendances"}/>
          <div>
            <ChildrenProgressBar name={"First"} presence={"absent"}/>
          </div>
      </div>
    </div>
  )
}

export default Attendances