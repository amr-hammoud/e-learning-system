import React from "react";
import "./style.css";
import Sidebar from "../../../Components/Common/Sidebar";

const AdminCoursesPage = () => {
	return (
		<div className="page flex">
			<Sidebar
				items={["Dashboard", "Users", "Courses", "Support", "Settings"]}
				selected={"Courses"}
			/>
			<div className="container">Courses</div>
		</div>
	);
};

export default AdminCoursesPage;
