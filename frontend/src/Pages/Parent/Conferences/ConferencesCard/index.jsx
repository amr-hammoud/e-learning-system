import React, { useState } from 'react'
import ConferencesModal from '../ConferencesModal'

const ConferencesCard = ({backgroundColor,text,subname}) => {
    const [isOpen , setIsOpen] = useState(false);
    const clickHandler = () => {
        setIsOpen(true)
    }
    const handleClose = () => setIsOpen(false)
  return (
    <div className='child-card-container flex column' onClick={clickHandler}>
        <div className={`child-card-header back-${backgroundColor}`}></div>
        <div className="child-card-name ">{text}</div>
        <div className='child-card-name subname'>{subname ? subname : ""}</div>
        <ConferencesModal isOpen={isOpen} handleClose={handleClose}/>

    </div>
  )
}

export default ConferencesCard