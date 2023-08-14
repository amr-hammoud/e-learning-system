import React from 'react'
import './style.css'
import Sidebar from "../../../Components/Common/Sidebar";
const ParentMessagesPage = () => {
  return (
    <div className="page flex">
			<Sidebar items = {["Children","Messages", "Conferences","Notifications"]} selected={"Messages"} />
			<div className="container">ParentMessagesPage</div>
		</div>
  )
}

export default ParentMessagesPage