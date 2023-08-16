import React from "react";
import './style.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Progress=({percentage})=>{
	
    return (
    <div className="flex row progress-card  ">
        <div className="progress-info flex column white-bg rounded">
            <div className="percentage primary-bg rounded">
                <CircularProgressbar 
                    value={percentage.value} 
                    text={`${percentage.value}%`}
                    
                    
                    
                     />
            </div>
            <div className="progress-title">
                <p className="dark-gray">Completed {percentage.topic}</p>
            </div>
    
        </div>
    </div>
    );
}
export default Progress;