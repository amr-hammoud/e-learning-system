import CreateSession from "../CreateSession/CreateSession";
import SessionItem from "../SessionItem/SessionItem";
import { useState, useEffect } from "react";
import { sendRequest } from "../../../config/request";
import Attendance from "../Attendance/Attendance";
import './style.css'

function Sessions() {
    const [clickedSession, setClickedSession] = useState(null);
    const students =  [
        {
            id: 1,
            name: "John Doe",
        },
        {
            id: 2,
            name: "Jack Doe",
        },
        {
            id: 3,
            name: "John Smith",
        },
        {
            id: 4,
            name: "Jane Smith",
        },

    ]

	const [showModal, setShowModal] = useState(false);
	const [meetings, setMeetings] = useState([]);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

    const [showModal2, setShowModal2] = useState(false);
    const toggleModal2 = () => {
		setShowModal2(!showModal2);
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
		
			<div className="container">
				<button onClick={toggleModal} className="create-meeting">Create Session</button>
                <Attendance showModal2={showModal2} toggleModal2={toggleModal2} students={students} date_time={"2023-12-8 12:00pm"} />
				<CreateSession showModal={showModal} toggleModal={toggleModal} />
				<div className="meetings-container">
				     {meetings?.map((meeting, index) => (
					    <SessionItem
						   key={index}
						   meeting={meeting}
                           students={students}
                           toggleModal2={toggleModal2}
					    />
				    ))}
				</div>
			</div>
	);
}

export default Sessions;
