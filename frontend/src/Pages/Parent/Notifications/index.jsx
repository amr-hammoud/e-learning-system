import React from 'react'
import Sidebar from "../../../Components/Common/Sidebar";
const ParentNotificationsPage = () => {
  return (
    <div className="page flex">
        <Sidebar items = {["Children","Messages", "Conferences","Notifications"]} selected={"Notifications"} />
    </div>
  )
}

export default ParentNotificationsPage