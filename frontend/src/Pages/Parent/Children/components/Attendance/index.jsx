import React, { useEffect, useState } from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'
import Navbar from '../../../../../Components/Common/Navbar'
import ChildrenProgressBar from '../ChildrenProgressBar'
import Header from '../Header'
import "./style.css"
const Attendances = () => {
  const [activeTab, setActiveTab] = useState("Stream");

  useEffect(() => {
      console.log(activeTab);
      //Add if else to render your desired component
      
  
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