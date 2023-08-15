import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import "./style.css";

const AdminDashboardPage = () => {
	return (
		<div className="page flex">
			<Sidebar
				items={["Dashboard", "Users", "Courses", "Support", "Settings"]}
				selected={"Dashboard"}
			/>
			<div className="container">Dashboard</div>
		</div>
	);
};

export default AdminDashboardPage;
