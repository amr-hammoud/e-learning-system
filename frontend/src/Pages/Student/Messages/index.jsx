import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";

function StudentMessagesPage() {
	return (
		<div className="page flex">
			<Sidebar
				items={["My Courses", "Browse", "Messages", "Conferences"]}
				selected={"Messages"}
			/>
			<div className="container">Messages</div>
		</div>
	);
}

export default StudentMessagesPage;
