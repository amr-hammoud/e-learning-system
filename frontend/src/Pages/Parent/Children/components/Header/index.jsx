import React from 'react'
import './style.css'
const Header = ({title}) => {
  return (
    <div className="details-header flex">
            <h2>{title}</h2>
    </div>
  )
}

export default Header