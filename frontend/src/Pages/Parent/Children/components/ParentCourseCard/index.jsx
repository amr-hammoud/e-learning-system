import React from 'react'
import "./style.css"
import { useLocation, useNavigate } from "react-router-dom";
const ParentCourseCard = ({backgroundColor,text}) => {
  const navigation = useNavigate();
	const location = useLocation();
  const base_location = location.pathname.split("/")[1];
  const clickHandler = () =>{
    navigation(`/${base_location}/ChildrenProgressDetails`);
  }
  return (
    <div className='parent-course-card-container flex column' onClick={clickHandler}>
        <div className={`parent-course-card-header back-${backgroundColor}`}></div>
        <div className="parent-course-card-name ">{text}</div>
    </div>
  )
}

export default ParentCourseCard