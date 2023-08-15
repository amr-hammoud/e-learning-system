import Sidebar from "../../../Components/Common/Sidebar";
import MeetingItem from "../../../Components/Common/MeetingItem/MeetingItem";
import CreateMeeting from "../../../Components/TeacherComponents/CreateMeeting/CreateMeeting";
import { useState } from "react";
import './style.css'

function TeacherConferencesPage() {

	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const meetings = [
		{
			id: 1,
			name: "John Doe",
			date: "12/12/2020 12:00",
			link: "https://meet.google.com/lookup/123456789",
		},
		{
			id: 2,
			name: "Jane Doe",
			date: "12/12/2020 12:00",
			link: "https://meet.google.com/lookup/123456789",
		},
		{
			id: 3,
			name: " Jack Doe",
			date: "12/12/2020 12:00",
			link: "https://meet.google.com/lookup/123456789",
		},
	];


	return (
		<div className="page flex">
			<Sidebar
				items={["Courses", "Messages", "Conferences"]}
				selected={"Conferences"}
			/>
			<div className="container">
				<button onClick={toggleModal}>Create Meeting</button>
				<CreateMeeting showModal={showModal} toggleModal={toggleModal} />
				<div className="meetings-container">
				     {meetings.map((meeting) => (
					    <MeetingItem
						   key={meeting.id}
						   meeting={meeting}
					    />
				    ))}
				</div>
			</div>
		</div>
	);
}

export default TeacherConferencesPage;
