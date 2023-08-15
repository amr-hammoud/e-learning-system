import React from "react";
import './style.css';
import Classwork from "../../../Components/Student/Classwork";
const ClassworkComponent=()=>{
    const ass={"title": "AI Assignment",
                "description": "Implement a sentiment analysis model using a neural network architecture. The model should be trained on a dataset of movie reviews and be able to classify the sentiment of a given review as positive or negative.",
                "submissionDate": "2022-10-15",
                "dueDate": "2022-10-30",
                "dueTime":"11:59",
                "grade":"100",
                "attachment": "https://example.com/ai_assignment.pdf"
    }
    
	return (
    <div class="course-stream-container primary-bg">
        <div className="flex column course-stream">
            <div className="stream-head rounded blue-bg white-color">
               <span>Course Name</span>
            </div>
            <div className="spacer-30"></div>
            <div className="flex center primary-">
                <Classwork ass={ass}/>
            </div>

        </div>
    </div>
    );
}
export default ClassworkComponent;