import React from 'react'
import './style.css'
import Sidebar from "../../../Components/Common/Sidebar";
import ChildCard from "./components/ChildCard";
const ParentChildrenPage = () => {
  
  return (
    <div className="page flex">
			<Sidebar items = {["Children","Messages", "Conferences","Notifications"]} selected={"Children"} />
      
			
      <ChildCard backgroundColor={1}/>
      <ChildCard backgroundColor={2}/>
		</div>
  )
}

export default ParentChildrenPage