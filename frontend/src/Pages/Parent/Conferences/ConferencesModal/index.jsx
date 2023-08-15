import React, { useState } from 'react'
import ModalComponent from '../../../../Components/Base/Modal/modal';
import "./style.css"
const ConferencesModal = ({showModal , toggleModal}) => {
const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  
  return (
    <ModalComponent showModal={showModal} onRequestClose={toggleModal}>
      <div className="create-meeting__form">
                <h1>Create Meeting</h1>
                <div className="create-meeting__input">
                   <label htmlFor="DateTime">Date and Time</label>
                   <input type="datetime-local" name="DateTime" id="DateTime" />
                </div>
                <div className="create-meeting__buttons">
                  <button className="cancel-button" onClick={toggleModal}>Cancel</button>
                  <button className="confirm-button">Confirm</button>
                </div>
            </div>
    </ModalComponent>
    
  )
}

export default ConferencesModal