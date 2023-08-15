import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import TeacherCourseCard from "../../../Components/TeacherComponents/TeacherCourseCard";
import { useEffect, useState } from "react";
import { sendRequest } from "../../../config/request";
import Navbar from "../../../Components/Common/Navbar";
import "./style.css"

const TeacherCoursesPage = () => {
	const [activeTab, setActiveTab] = useState("Stream");
	const [courses, setCourses] = useState([]);
	const [activeCourse, setActiveCourse] = useState(null);

	useEffect(() => {
		setActiveCourse(null);

		const getCourses = async () => {
			try {
				const response = await sendRequest({route: "teacher/courses"});
				setCourses(response.courses);
			} catch (error) {
				console.log(error);
			}
		};

		getCourses();
	}, []);

	useEffect(() => {

		

	}, [activeCourse]);

	useEffect(() => {
		console.log(activeTab);
	}, [activeTab]);
	

	return (
		<div className="page flex">
			<Sidebar
				items={["Courses", "Messages", "Conferences"]}
				selected={"Courses"}
			/>
			<div className="container">

			{ !activeCourse && <div className="course-container">
			{courses?.map((course) => (
				<TeacherCourseCard key={course.id} course={course} setActiveCourse={setActiveCourse}/>
			))}
			</div>}

			{ activeCourse && <div>
				<Navbar items={["Stream", "Classwork", "Sessions", "Discussion", "People", "Grades"]} selected={"Stream"} onTabChanged={(tab) => setActiveTab(tab) } />

				</div>}

			
			</div>
		</div>
	);
}

export default TeacherCoursesPage;
