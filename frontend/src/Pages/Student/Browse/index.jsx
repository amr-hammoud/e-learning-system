import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import './style.css'
import CourseCard from "../../../Components/Student/CourseCard";
import CourseCardDetails from "../../../Components/Student/CourseDetails";

function StudentBrowsePage() {
	return (
		<div className="page flex ">
			<Sidebar
				items={["My Courses", "Browse", "Messages", "Conferences"]}
				selected={"Browse"}
			/>
			{/* <div className="container">Browse</div> */}
			{/* <div className="flex row course-browse-container primary-bg">
				<CourseCard />
				<CourseCard />
				<CourseCard />
			</div> */}
			<div className=" course-details-popup flex center">
				<CourseCardDetails />
			</div>
		</div>
	);
}

export default StudentBrowsePage;