import React, { useEffect, useState } from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'
import Navbar from '../../../../../Components/Common/Navbar'
import ChildrenProgressCard from '../ChildrenProgressCard'
import Header from '../Header'
import "./style.css"
const ChildrenProgressDetails = () => {
  const [activeTab, setActiveTab] = useState("Stream");

  useEffect(() => {
      console.log(activeTab);
      //Add if else to render your desired component
      
  
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