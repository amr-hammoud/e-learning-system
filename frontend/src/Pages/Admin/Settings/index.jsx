import React from "react";
import "./style.css";
import Sidebar from "../../../Components/Common/Sidebar";

const AdminSettingsPage = () => {
	return (
		<div className="page flex">
			<Sidebar
				items={["Dashboard", "Users", "Courses", "Support", "Settings"]}
				selected={"Settings"}
			/>
			<div className="container">Settings</div>
		</div>
	);
};

export default AdminSettingsPage;
