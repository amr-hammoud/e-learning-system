import React from 'react'
import "./style.css"
const ChildCard = ({backgroundColor}) => {
  return (
    <div className='child-card-container flex column'>
        <div className={`child-card-header back-${backgroundColor}`}></div>
        <div className="child-card-name ">Youssef</div>
    </div>
  )
}

export default ChildCard