import React from 'react'
import "./style.css"
const ChildrenProgressCard = ({text}) => {
  return (
    <div className='child-progress-card flex'>
        <div className='child-progress-text'>{text}</div>
    </div>
  )
}

export default ChildrenProgressCard