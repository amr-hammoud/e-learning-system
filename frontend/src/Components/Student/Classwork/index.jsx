import React from "react";
import './style.css';
import Button from "../../Base/Button/index.jsx";

const  Classwork=({ass})=> {
	return (
    <div class="flex column classwork-details rounded ">
        <div className="classwork-info flex column">
            <div class="classwork-title flex column roundedSmall">
                <h2 className="dark-gray">
                {ass.title}
                </h2>
                <div class="classwork-data flex row">
                    <div className="classwork-date">
                        <span className="dark-gray">Due : {ass.dueDate} {ass.dueTime}</span>
                    </div>
                    <div className="classwork-grade">
                    <span className="dark-gray">Grade : /{ass.grade}</span>
                    </div>
                </div>
            </div>
            <div className="classwork-instructions flex row ">
            <div className="classwork-content roundedSmall">
                <div className="classwork-description">
                {ass.description}
                </div>
            </div>
            <div className="classwork-attach flex primary-bg roundedSmall">
                <div className="classwork-file  flex column">
                    <input type="file" className="ass-file"></input>
                    <div className="btnSub flex center">
                        <Button 
                            color={"blue-bg"}
                            textColor={"white-color"}
                            text={"Mark as done"}
                        />
                    </div>
                </div>
            </div>
            </div>
            <div className="spacer-30"></div>
            <div className="spacer-30"></div>
            <div className="spacer-30"></div>
        </div>
    </div>
    );
}
export default Classwork;