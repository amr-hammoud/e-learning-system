import React from "react";
import './style.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Progress=({percentage})=>{
	
    return (
    <div class="flex row progress-card  ">
        <div className="progress-info flex column white-bg rounded">
            <div class="percentage primary-bg rounded">
                <CircularProgressbar 
                    value={percentage.value} 
                    text={`${percentage.value}%`}
                    
                    
                    
                     />
            </div>
            <div class="progress-title">
                <p className="dark-gray">Completed {percentage.topic}</p>
            </div>
    
        </div>
    </div>
    );
}
export default Progress;