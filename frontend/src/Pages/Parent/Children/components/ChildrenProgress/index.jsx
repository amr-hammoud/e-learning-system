import React from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'

const ChildrenProgress = () => {
  return (
    <div>
        <Sidebar items = {["Children","Messages", "Conferences"]} selected={"Children"} />
    </div>
  )
}

export default ChildrenProgress