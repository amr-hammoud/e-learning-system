import React from "react";
import './style.css';
import Button from "../../Base/Button";

const NewMeeting=({teachers})=>{
	return (
    <div class="flex center meeting-card rounded ">
        <div className="meeting-info flex column">
            <div class="meeting-data  primary-bg flex column roundedSmall">
                <div className="row-meeting flex column">
                    <label>Choose a date-time</label>
                    <input type="datetime"/>
                </div>
                <div className="row-meeting flex column">
                    <label>Choose a teacher</label>
                    <select>
                    <option value="1">Teacher1 Name</option>
                    <option value="2">Teacher1 Name</option>
                    <option value="3">Teacher1 Name</option>
                    <option value="4">Teacher1 Name</option>
                    </select>
                </div>
                <div className="row-meeting btn flex column">
                    <Button
                        color={"blue-bg"}
                        textColor={"dark-gray"}
                        text={"Confirm"}              
                        />
                    </div>
            </div>
        </div>           
    </div>
    );
}
export default NewMeeting;