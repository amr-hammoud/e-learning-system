import React from "react";
import "./style.css";
import Sidebar from "../../../Components/Common/Sidebar";

const AdminSupportPage = () => {
	return (
		<div className="page flex">
			<Sidebar
				items={["Dashboard", "Users", "Courses", "Support", "Settings"]}
				selected={"Support"}
			/>
			<div className="container">Support</div>
		</div>
	);
};

export default AdminSupportPage;
