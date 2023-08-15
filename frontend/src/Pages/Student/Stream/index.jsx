import React from "react";
import './style.css';
import CourseStream from "../../../Components/Student/CourseStream";
const StudentStream=()=>{
    
    const course={"title": "Artificial Intelligence",
				  "subject": "Computer Science",
				  "description": "This course provides an overview of Artificial Intelligence, covering topics such as machine learning, natural language processing, and computer vision. Students will learn about the fundamental concepts and applications of AI through hands-on projects and case studies.",
				  "ass":"15",
				  "quizz":"5",
				  "session":"20"
				}
    
    
    
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
               <span>{course.title}</span>
            </div>
            <div className="spacer-30"></div>
            <div className="stream-container flex column">
                <CourseStream ass={ass}/>
                <CourseStream ass={ass}/>
                <CourseStream ass={ass}/>
                <CourseStream ass={ass}/>
                <CourseStream ass={ass}/>
            </div>
        </div>
    </div>
    );
}
export default StudentStream;