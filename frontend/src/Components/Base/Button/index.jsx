import React from 'react';
import './style.css';

const Button=({ text, color, textColor, onClick, enabled = true })=>{
  const clickHandler = () => {
    if (enabled) {
      console.log("clicked");
    }
  };
  
  
  return (
    <button className={`roundedMedium base-button pointer ${color} ${textColor}`}
    onClick={() => clickHandler()}>
    {text}
    </button>
  );
}

export default Button;