import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import './style.css'
import CourseCard from "../../../Components/Student/CourseCard";

function StudentBrowsePage() {
	return (
		<div className="page flex ">
			<Sidebar
				items={["My Courses", "Browse", "Messages", "Conferences"]}
				selected={"Browse"}
			/>
			{/* <div className="container">Browse</div> */}
			<div className="flex row course-browse-container primary-bg">
				<CourseCard />
				<CourseCard />
				<CourseCard />
			</div>
		</div>
	);
}

export default StudentBrowsePage;