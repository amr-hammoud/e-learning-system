import React from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import Conference from "../../../Components/Student/Conference";
import Button from "../../../Components/Base/Button";
import NewMeeting from "../../../Components/Student/NewMeeting";
const StudentConferencesPage=()=>{
	const meeting={"date": "2022-11-10",
					"teacher": "John Smith",
					"link": "https://meet.google.com/abc123xyz"
				}
	return (
		<div className="page flex">
			<Sidebar
				items={["My Courses", "Browse", "Messages", "Conferences"]}
				selected={"Conferences"}
			/>
			{/* <div className="container">Conferences</div> */}
			<div className="course-browse-container">
			<div class="flex column meeting-container white-bg rounded ">
				<div className="new-conference flex row center">
					<Button 
					color={"primary-bg"}
					textColor={"dark-gray"}
					text={"Book Conference"}            
					/>
				</div>
				<div className="spacer-"></div>
				<div className="spacer-30"></div>
				{/* <Conference meeting={meeting} />
				<Conference meeting={meeting} />
				<Conference meeting={meeting} />
				<Conference meeting={meeting} /> */}
				<NewMeeting />
			</div>
			</div>

		</div>
	);
}

export default StudentConferencesPage;
