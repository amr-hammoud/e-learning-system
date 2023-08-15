import React from "react";
import "./style.css";
import Sidebar from "../../../Components/Common/Sidebar";

const AdminUsersPage = () => {
	return (
		<div className="page flex">
			<Sidebar
				items={["Dashboard", "Users", "Courses", "Support", "Settings"]}
				selected={"Users"}
			/>
			<div className="container">Users</div>
		</div>
	);
};

export default AdminUsersPage;
