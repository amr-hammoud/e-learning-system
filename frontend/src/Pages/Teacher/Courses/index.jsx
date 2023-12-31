import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import TeacherCourseCard from "../../../Components/TeacherComponents/TeacherCourseCard";
import Navbar from "../../../Components/Common/Navbar";
import Stream from "../../../Components/TeacherComponents/Stream/Stream";
import Classwork from "../../../Components/TeacherComponents/Classwork/Classwork";
import People from "../../../Components/TeacherComponents/People/People";
import Sessions from "../../../Components/TeacherComponents/Sessions/Sessions";
import DiscussionTab from "../../../Components/TeacherComponents/Discussion/Discussion";
import { useEffect, useState } from "react";
import { sendRequest } from "../../../config/request";
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

			{ !activeCourse && <div className="courses-container">
			{courses?.map((course) => (
				<TeacherCourseCard key={course.id} course={course} setActiveCourse={setActiveCourse}/>
			))}
			</div>}

			{ activeCourse && <div>
				<Navbar items={["Stream", "Classwork", "Sessions", "Discussion", "People", "Grades"]} selected={"Stream"} onTabChanged={(tab) => setActiveTab(tab) } />
                {activeTab === "Stream" && <div className="course-stream">
					<Stream activeCourse={activeCourse} />
					</div>} 
				{activeTab === "Classwork" && <div className="course-stream">
					<Classwork activeCourse={activeCourse} />
					</div>}
				{activeTab === "Sessions" && <div className="course-stream">
					<Sessions activeCourse={activeCourse} />
					</div>}
				{activeTab === "Discussion" && <div className="course-stream">
					<DiscussionTab activeCourse={activeCourse} />
					</div>}
				{activeTab === "People" && <div className="course-stream">
					<People activeCourse={activeCourse} />
					</div>}
				


				</div>}

			
			</div>
		</div>
	);
}

export default TeacherCoursesPage;
