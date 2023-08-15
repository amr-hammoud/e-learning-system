import React from 'react'
import "./style.css"
import { useLocation, useNavigate } from "react-router-dom";
const ChildrenProgressCard = ({text}) => {
  const navigation = useNavigate();
	const location = useLocation();
  const base_location = location.pathname.split("/")[1];
  const clickHandler = () => {
    navigation(`/${base_location}/${text}`);
  }
  return (
    <div className='child-progress-card flex' onClick={clickHandler}>
        <div className='child-progress-text'>{text}</div>
    </div>
  )
}

export default ChildrenProgressCard