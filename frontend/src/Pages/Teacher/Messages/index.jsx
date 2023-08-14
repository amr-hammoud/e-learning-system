import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import "./style.css";

function TeacherMessagesPage() {
	return (
		<div className="page flex">
			<Sidebar
				items={["Courses", "Messages", "Conferences"]}
				selected={"Messages"}
			/>
			<div className="container">Messages</div>
		</div>
	);
}

export default TeacherMessagesPage;
