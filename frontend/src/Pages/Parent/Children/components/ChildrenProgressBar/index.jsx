import React from 'react'
import "./style.css"
const ChildrenProgressBar = ({name, grade = 0,due_date = "", presence = "presence"}) => {
  return (
    <div className='children-bar-container flex spaceBetween'>
        <div>{name}</div>
        <div className={grade || due_date || presence=="present" ? 'green' :  'red'}>
            {presence=="present" ? "Present": presence=="absent" ? "Absent" : presence == "" ? "unknown" : grade ? "grade : "+grade : due_date ? "due date : "+due_date : "Missed"}
        </div>
    </div>
  )
}

export default ChildrenProgressBar