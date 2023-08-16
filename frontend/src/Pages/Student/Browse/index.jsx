import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import './style.css'

import CourseCardDetails from "../../../Components/Student/CourseDetails";
const StudentBrowsePage=()=>{
	const course={"title": "Artificial Intelligence",
				  "subject": "Computer Science",
				  "description": "This course provides an overview of Artificial Intelligence, covering topics such as machine learning, natural language processing, and computer vision. Students will learn about the fundamental concepts and applications of AI through hands-on projects and case studies.",
				  "ass":"15",
				  "quizz":"5",
				  "session":"20"
				}
	
	return (
		<div className="page flex ">
			<Sidebar
				items={["My Courses", "Browse", "Messages", "Conferences"]}
				selected={"Browse"}
			/>
			{/* <div className="container">Browse</div> */}
			{/* <div className="flex row course-browse-container primary-bg">
				<CourseCard course={course}/>
				<CourseCard course={course}/>
				<CourseCard course={course}/>
			</div> */}
			<div className=" course-details-popup flex center">
				<CourseCardDetails course={course}/>
			</div>
		</div>
	);
}

export default StudentBrowsePage;