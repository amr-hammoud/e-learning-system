import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import './style.css'

function TeacherConferencesPage() {
	return (
		<div className="page flex">
			<Sidebar
				items={["Courses", "Messages", "Conferences"]}
				selected={"Conferences"}
			/>
			<div className="container">Conferences</div>
		</div>
	);
}

export default TeacherConferencesPage;
