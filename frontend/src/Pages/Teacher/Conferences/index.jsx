import Sidebar from "../../../Components/Common/Sidebar";
import MeetingItem from "../../../Components/Common/MeetingItem/MeetingItem";
import CreateMeeting from "../../../Components/TeacherComponents/CreateMeeting/CreateMeeting";
import { useState, useEffect } from "react";
import { sendRequest } from "../../../config/request";
import './style.css'

function TeacherConferencesPage() {

	const [showModal, setShowModal] = useState(false);
	const [meetings, setMeetings] = useState([]);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	useEffect(() => {
		const getConferences = async () => {
			try {
				const response = await sendRequest({route: 'teacher/conferences'})
			if (response.status === 'success') {
				setMeetings(response.meetings);
				console.log(response.meetings);
			}
			} catch (error) {
				console.log(error);
			}
		}
		getConferences();
	}, []);


	return (
		<div className="page flex">
			<Sidebar
				items={["Courses", "Messages", "Conferences"]}
				selected={"Conferences"}
			/>
			<div className="container">
				<button onClick={toggleModal} className="create-meeting">Create Meeting</button>
				<CreateMeeting showModal={showModal} toggleModal={toggleModal} />
				<div className="meetings-container">
				     {meetings?.map((meeting) => (
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
