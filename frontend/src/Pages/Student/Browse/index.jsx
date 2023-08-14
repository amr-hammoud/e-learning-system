import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import './style.css'

function StudentBrowsePage() {
	return (
		<div className="page flex">
			<Sidebar
				items={["My Courses", "Browse", "Messages", "Conferences"]}
				selected={"Browse"}
			/>
			<div className="container">Browse</div>
		</div>
	);
}

export default StudentBrowsePage;