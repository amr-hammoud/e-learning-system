import React from 'react'
import "./style.css"
import { useLocation, useNavigate } from "react-router-dom";
const ChildCard = ({backgroundColor,text,subname = "",navigate}) => {
  const navigation = useNavigate();
	const location = useLocation();
  const base_location = location.pathname.split("/")[1];
  const clickHandler = () =>{
    navigation(`/${base_location}/${navigate}`);
  }
  return (
    <div className='child-card-container flex column' onClick={clickHandler}>
        <div className={`child-card-header back-${backgroundColor}`}></div>
        <div className="child-card-name ">{text}</div>
        <div className='child-card-name subname'>{subname ? subname : ""}</div>
    </div>
  )
}

export default ChildCard