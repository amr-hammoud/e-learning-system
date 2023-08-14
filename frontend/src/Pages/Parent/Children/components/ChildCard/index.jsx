import React from 'react'
import "./style.css"
import ChildrenProgress from '../ChildrenProgress'
import { useLocation, useNavigate } from "react-router-dom";
const ChildCard = ({backgroundColor,text}) => {
  const navigation = useNavigate();
	const location = useLocation();
  const base_location = location.pathname.split("/")[1];
  const clickHandler = () =>{7
    navigation(`/${base_location}/ChildrenProgress`);
  }
  return (
    <div className='child-card-container flex column' onClick={clickHandler}>
        <div className={`child-card-header back-${backgroundColor}`}></div>
        <div className="child-card-name ">{text}</div>
    </div>
  )
}

export default ChildCard