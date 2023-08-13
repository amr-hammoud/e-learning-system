import React from 'react'
import './style.css'
import Sidebar from '../../../Components/Common/Sidebar'

function ParentLandingPage() {
  return (
    <div className="page flex">
			<Sidebar />
			<div className="container">ParentLandingPage</div>
		</div>
  )
}

export default ParentLandingPage