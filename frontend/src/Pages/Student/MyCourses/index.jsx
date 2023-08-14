import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";

function StudentCoursesPage() {
	return (
		<div className="page flex">
			<Sidebar
				items={["My Courses", "Browse", "Messages", "Conferences"]}
				selected={"My Courses"}
			/>
			<div className="container"> My Courses</div>
		</div>
	);
}

export default StudentCoursesPage;