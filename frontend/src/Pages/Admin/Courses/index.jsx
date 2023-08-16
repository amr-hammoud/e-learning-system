import React, { useEffect, useState } from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import { sendRequest } from "../../../config/request";
import CourseRow from "../../../Components/Admin/CourseRow";

const AdminCoursesPage = () => {

	const [courses, setCourses] = useState([]);

	const fetchCourses = async () => {
		const response = await sendRequest({
			method: "GET",
			route: "/admin/course/all",
		});
		setCourses(response.courses);
	};

	useEffect(() => {
		fetchCourses();
	}, []);

	return (
		<div className="page flex">
			<Sidebar
				items={["Dashboard", "Users", "Courses", "Support", "Settings"]}
				selected={"Courses"}
			/>
			<div className="container">
				<div className="flex spaceBetween">
					<h1>Courses</h1>
				</div>
				<div className="list-container">
					<div className="list-header">
						<div className="users-header-name">Course Name</div>
						<div className="users-header-role">Teacher</div>
						<div className="users-header-actions">Actions</div>
					</div>


					{courses.map((course, index) => {
						return (
							<CourseRow
								key={index}
								course={course}
								// onDelete={(id) => deleteCourse(id)}
								// onUpdate={() => {
								// 	setCourseData(course);
								// 	toggleUpdateModal();
								// }}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AdminCoursesPage;
