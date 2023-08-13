import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";

function TeacherCoursesPage() {
	return (
		<div className="page flex">
			<Sidebar
				items={["Courses", "Messages", "Conferences"]}
				selected={"Courses"}
			/>
			<div className="container">Courses</div>
		</div>
	);
}

export default TeacherCoursesPage;
