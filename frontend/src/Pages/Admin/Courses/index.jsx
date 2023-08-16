import React, { useEffect, useState } from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import { sendRequest } from "../../../config/request";
import CourseRow from "../../../Components/Admin/CourseRow";
import CreateCourse from "../../../Components/Admin/CreateCourse";
import UpdateCourse from "../../../Components/Admin/UpdateCourse";

const AdminCoursesPage = () => {

	const [courses, setCourses] = useState([]);

	const fetchCourses = async () => {
		const response = await sendRequest({
			method: "GET",
			route: "/admin/course/all",
		});
		setCourses(response.courses);
	};

	const deleteCourse = async (id) => {
		const response = await sendRequest({
			method: "DELETE",
			route: `/admin/course/delete/${id}`,
		});
		if (response.status === "success") {
			fetchCourses();
		}
	};

	const updateCourse = async (updatedCourseData) => {
		const response = await sendRequest({
			method: "POST",
			route: `/admin/course/update/${updatedCourseData.id}`,
			body: updatedCourseData,
		});
		if (response.status === "success") {
			fetchCourses();
			toggleUpdateModal();
		}
	};

	const createCourse = async (courseData) => {
		const response = await sendRequest({
			method: "POST",
			route: "/admin/course/create",
			body: courseData,
		});
		if (response.status === "success") {
			fetchCourses();
			toggleCreateModal();
		}
	};

	useEffect(() => {
		fetchCourses();
	}, []);

	const [showCreateModal, setShowCreateModal] = useState(false);
	const toggleCreateModal = () => {
		setShowCreateModal(!showCreateModal);
	};

	const [showUpdateModal, setShowUpdateModal] = useState(false);
	const toggleUpdateModal = () => {
		setShowUpdateModal(!showUpdateModal);
	};

	const [courseData, setCourseData] = useState({});
	return (
		<div className="page flex">
			<Sidebar
				items={["Dashboard", "Users", "Courses", "Support", "Settings"]}
				selected={"Courses"}
			/>
			<div className="container">
				<div className="flex spaceBetween">
					<h1>Courses</h1>
					<button className="admin-create-button" onClick={toggleCreateModal}>Create Course</button>
				</div>
				<div className="list-container">
					<div className="list-header">
						<div className="users-header-name">Course Name</div>
						<div className="users-header-role">Teacher</div>
						<div className="users-header-actions">Actions</div>
					</div>

					<CreateCourse
						showModal={showCreateModal}
						toggleModal={toggleCreateModal}
						handleRequest={createCourse}
					/>

					<UpdateCourse
						showModal={showUpdateModal}
						toggleModal={toggleUpdateModal}
						handleRequest={updateCourse}
						course={courseData}
						handleUserData={setCourseData}
					/>

					{courses.map((course, index) => {
						return (
							<CourseRow
								key={index}
								course={course}
								onDelete={(id) => deleteCourse(id)}
								onUpdate={() => {
									setCourseData(course);
									toggleUpdateModal();
								}}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AdminCoursesPage;
