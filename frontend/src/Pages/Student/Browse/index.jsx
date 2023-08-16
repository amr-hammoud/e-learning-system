import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import { sendRequest } from "../../../config/request";
import './style.css';
import { useState,useEffect} from "react";

import CourseCard from "../../../Components/Student/CourseCard";
import CourseCardDetails from "../../../Components/Student/CourseDetails";
const StudentBrowsePage=()=>{
	const [availableCourses, setAvailableCourses] = useState([]);
	const getAvailableCourses=async ()=>{
		try{
			const response=await sendRequest({
				method:"GET",
				route:"/student/courseEnrollments/availableCourses",
				body:" ",
				includeHeaders:true
			})
			console.log("courses:",response);
			setAvailableCourses(response);
		}catch (error) {
			console.log(error);}
	}
	useEffect(() => {
		getAvailableCourses();
	},[]);
	const courses = [
		{
		  id: 1,
		  teacher_id: 123,
		  name: "Mathematics",
		  subject: "Math",
		  description: "Introduction to Algebra",
		  max_enrollments: 30,
		  total_sessions: 10,
		  total_assignments: 5,
		  total_quizzes: 3,
		  start_date: "2022-09-01",
		  end_date: "2022-12-15",
		  meeting_link: "https://example.com/meeting"
		},
		{
		  id: 2,
		  teacher_id: 456,
		  name: "English Literature",
		  subject: "English",
		  description: "Exploring Classic Novels",
		  max_enrollments: 25,
		  total_sessions: 8,
		  total_assignments: 4,
		  total_quizzes: 2,
		  start_date: "2022-09-05",
		  end_date: "2022-12-10",
		  meeting_link: "https://example.com/meeting"
		}
	  ];





	return (
		<div className="page flex ">
			<Sidebar
				items={["My Courses", "Browse", "Messages", "Conferences"]}
				selected={"Browse"}
			/>
			{/* <div className="container">Browse</div> */}
			<div className="flex row course-browse-container primary-bg">
			{courses.map((course, index) => {
				        return  <CourseCard course={course} key={index}  />;
			            })}
			</div>
			<div className=" course-details-popup flex center">
				<CourseCardDetails course={course}/>
			</div>
		</div>
	);
}

export default StudentBrowsePage;