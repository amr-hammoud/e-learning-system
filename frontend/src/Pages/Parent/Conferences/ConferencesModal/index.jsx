import React, { useState } from 'react'
import Modal from "react-modal"
import "./style.css"
const ConferencesModal = ({isOpen,handleClose}) => {
const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className="modal flex column center"
      overlayClassName="overlay"
    >
        <div className='input-container flex column'>
            <label htmlFor="date">Date</label>
            <input type="text" id='date' className='input'/>
        </div>
        <div className='input-container flex column'>
            <label htmlFor="time">Time</label>
            <input type="text" id='time' className='input' />
        </div>
        <div className='checkbox flex'>
        <label htmlFor="checkbox">In Person</label>
        <input
          type="checkbox"
          id='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        </div>
        <button className='create-button'>Create</button>
        
    </Modal>
  )
}

export default ConferencesModal