import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";

function StudentConferencesPage() {
	return (
		<div className="page flex">
			<Sidebar
				items={["My Courses", "Browse", "Messages", "Conferences"]}
				selected={"Conferences"}
			/>
			<div className="container">Conferences</div>
		</div>
	);
}

export default StudentConferencesPage;
