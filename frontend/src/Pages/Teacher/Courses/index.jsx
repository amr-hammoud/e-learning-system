import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import TeacherCourseCard from "../../../Components/TeacherComponents/TeacherCourseCard";
import { useEffect, useState } from "react";
import { sendRequest } from "../../../config/request";
import "./style.css"

function TeacherCoursesPage() {
	
	const [courses, setCourses] = useState([]);

	useEffect(() => {

		const getCourses = async () => {
			try {
				const response = await sendRequest({route: "teacher/courses"});
				setCourses(response.courses);
				console.log(response.courses);
			} catch (error) {
				console.log(error);
			}
		};

		getCourses();
	}, []);
	

	return (
		<div className="page flex">
			<Sidebar
				items={["Courses", "Messages", "Conferences"]}
				selected={"Courses"}
			/>
			<div className="container courses-container">
			{courses?.map((course) => (
				<TeacherCourseCard key={course.id} course={course} />
			))}
			</div>
		</div>
	);
}

export default TeacherCoursesPage;
