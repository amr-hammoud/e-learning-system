import React from 'react'
import "./style.css"
const ParentCourseCard = ({backgroundColor,text}) => {
  return (
    <div className='parent-course-card-container flex column'>
        <div className={`parent-course-card-header back-${backgroundColor}`}></div>
        <div className="parent-course-card-name ">{text}</div>
    </div>
  )
}

export default ParentCourseCard