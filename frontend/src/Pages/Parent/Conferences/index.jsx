import React from 'react'
import './style.css'
import Sidebar from "../../../Components/Common/Sidebar";
const ParentConferencesPage = () => {
  return (
    <div className="page flex">
			<Sidebar items = {["Children","Messages", "Conferences"]} selected={"Conferences"} />
			<div className="container">ParentConferencesPage</div>
		</div>
  )
}

export default ParentConferencesPage