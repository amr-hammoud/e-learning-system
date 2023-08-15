import ModalComponent from "../../Base/Modal/modal";
import { sendRequest } from "../../../config/request";
import { useState } from "react";
import "./style.css";


const CreateMeeting = ({showModal , toggleModal}) => {
    const [meetingData, setMeetingData] = useState({
        date_time: "",
        email: "",
        link: "",
    });

    const handleChange = (e) => {
        setMeetingData({ ...meetingData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        const datePart = meetingData.date_time.split('T')[0];
        const timePart = meetingData.date_time.split('T')[1];
        const formattedDateTime = `${datePart} ${timePart}:00`;
        setMeetingData({ ...meetingData, date_time: formattedDateTime });
        console.log(meetingData);

        e.preventDefault();
        try {
           const response = await sendRequest({ method: "POST", route: "teacher/conference/create", body: meetingData });
           if (response.status === 'success') {
               toggleModal();
           } 
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <ModalComponent showModal={showModal} onRequestClose={toggleModal}>
            <div className="create-meeting__form">
                <h1>Create Meeting</h1>
                <div className="create-meeting__input">
                   <label htmlFor="DateTime">Date and Time</label>
                   <input type="datetime-local" name="date_time" id="DateTime" onChange={handleChange} />
                </div>
                <div className="create-meeting__input">
                   <label htmlFor="guest">Guest</label>
                   <input type="text" name="email" id="guest" placeholder="Enter email address of your guest" onChange={handleChange} />
                </div>
                <div className="create-meeting__input">
                   <label htmlFor="meeting-link">Meeting Link</label>
                   <input type="text" name="link" id="meeting-link" placeholder="Enter the link for your meeting" onChange={handleChange} />
                </div>
                <div className="create-meeting__buttons">
                  <button className="cancel-button" onClick={toggleModal}>Cancel</button>
                  <button type="submit" className="confirm-button" onClick={handleSubmit}>Confirm</button>
                </div>
            </div>
        </ModalComponent>
    )


};

export default CreateMeeting;
