import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../../../Components/Common/Sidebar";


import CourseEnrolledCard from "../../../Components/Student/EnrolledCourseCard";
import "./style.css";
import { sendRequest } from "../../../config/request";
// import StudentStream from "../Stream";
function StudentCoursesPage() {
	
	const [enrolledCourses, setEnrolledCourses] = useState([]);
	const getEnrolledCourses=async ()=>{
		try{
			const response=await sendRequest({
				method:"GET",
				route:"/student/offline-learning/get-all-courses",
				body:" ",
				includeHeaders:true
			})
			console.log(response);
			setEnrolledCourses(response);
		}catch (error) {
			console.log(error);}
	}
	useEffect(() => {
		getEnrolledCourses();
	},[]);

	
	return (
		<div className="page flex">
			<Sidebar
				items={["My Courses", "Browse", "Messages", "Conferences"]}
				selected={"My Courses"}
			/>
			<div className="flex row course-browse-container primary-bg">
				
				{enrolledCourses.map((course, index) => {
				return <CourseEnrolledCard course={course} key={index}  />;
			})}
			
			</div>
			{/* <div className="flex column course-browse-container primary-bg">
			<StudentStream course={course}/>
			</div> */}
		</div>
	);
}


export default StudentCoursesPage;