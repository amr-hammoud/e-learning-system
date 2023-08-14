import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import CourseEnrolledCard from "../../../Components/Student/EnrolledCourseCard";
import CourseCard from "../../../Components/Student/CourseCard";

function StudentCoursesPage() {
	const course={"title": "Artificial Intelligence"};
	return (
		<div className="page flex">
			<Sidebar
				items={["My Courses", "Browse", "Messages", "Conferences"]}
				selected={"My Courses"}
			/>
			{/* <div className="container"> My Courses</div> */}
			<div className="flex row course-browse-container primary-bg">
				<CourseEnrolledCard course={course}/>
			    <CourseEnrolledCard  course={course}/>
				<CourseEnrolledCard  course={course}/>
			</div>
		</div>
	);
}

export default StudentCoursesPage;