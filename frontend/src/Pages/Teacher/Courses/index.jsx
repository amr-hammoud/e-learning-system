import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import CourseCard from "../../../Components/Common/CourseCard";
import "./style.css"

function TeacherCoursesPage() {

	const courses = [
		{
			id : 1,
			name : "Course 1",
			subject : "Subject 1",
			description : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
		},

		{
			id : 2,
			name : "Course 2",
			subject : "Subject 2",
			description : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
		},

		{
			id : 3,
			name : "Course 3",
			subject : "Subject 3",
			description : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
		}
	]

	return (
		<div className="page flex">
			<Sidebar
				items={["Courses", "Messages", "Conferences"]}
				selected={"Courses"}
			/>
			<div className="container courses-container">
			{courses.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}
			</div>
		</div>
	);
}

export default TeacherCoursesPage;
