import React, { useState } from 'react'
import ConferencesModal from '../ConferencesModal'

const ConferencesCard = ({backgroundColor,text,subname}) => {
  const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};
  return (
    <div className='child-card-container flex column' onClick={toggleModal}>
        <div className={`child-card-header back-${backgroundColor}`}></div>
        <div className="child-card-name ">{text}</div>
        <div className='child-card-name subname'>{subname ? subname : ""}</div>
        <ConferencesModal showModal={showModal} toggleModal={toggleModal}/>

    </div>
  )
}

export default ConferencesCard