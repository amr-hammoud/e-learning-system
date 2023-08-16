import ModalComponent from "../../Base/Modal/modal";
import { sendRequest } from "../../../config/request";
import { useState } from "react";
import "./style.css";


const CreateAssessment = ({showModal , toggleModal, activeCourse}) => {
    const [assessmentData, setAssessmentData] = useState({
        course_id: activeCourse,
        title: "",
        description: "",
        attachment: null,
        due_date: "",
        assessment_type: "",
    });

    const handleChange = (e) => {
        if (e.target.name === "attachment") {
            setAssessmentData({ ...assessmentData, attachment: e.target.files[0] });
        } else {
            setAssessmentData({ ...assessmentData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        const datePart = assessmentData.due_date.split('T')[0];
        const timePart = assessmentData.due_date.split('T')[1];
        const formattedDateTime = `${datePart} ${timePart}:00`;
        setAssessmentData({ ...assessmentData, due_date: formattedDateTime });
        
        const data = new FormData();
        data.append("course_id", assessmentData.course_id);
        data.append("title", assessmentData.title);
        data.append("description", assessmentData.description);
        data.append("due_date", assessmentData.due_date);
        data.append("assessment_type", assessmentData.assessment_type);
        data.append("attachment", assessmentData.attachment);

        e.preventDefault();
        try {
           const response = await sendRequest({ method: "POST", route: "teacher/course/assessment/create", body: data });
           if (response.status === 'success') {
            console.log(response);
               toggleModal();
           } 
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <ModalComponent showModal={showModal} onRequestClose={toggleModal}>
            <div className="create-assessment__form">
                <h1>Create Assessment</h1>
                <div className="create-assessment__input">
                   <label htmlFor="title">Title</label>
                   <input type="text" name="title" id="title" onChange={handleChange} placeholder="Enter title"/>
                </div>
                <div className="create-assessment__input">
                   <label htmlFor="description">Description</label>
                   <input type="text" name="description" id="description" placeholder="Enter description" onChange={handleChange} />
                </div>
                <div className="create-assessment__input">
                   <label htmlFor="type">Assessment Type</label>
                   <input type="text" name="type" id="type" placeholder="Enter Assessment type" onChange={handleChange} />
                </div>
                <div className="create-assessment__input">
                   <label htmlFor="attachment">Attachment</label>
                   <input type="file" name="attachment" id="attachment" onChange={handleChange} />
                </div>
                <div className="create-meeting__input">
                   <label htmlFor="DateTime">Date and Time</label>
                   <input type="datetime-local" name="date_time" id="DateTime" onChange={handleChange} />
                </div>
                <div className="create-assessment__buttons">
                  <button className="cancel-button" onClick={toggleModal}>Cancel</button>
                  <button type="submit" className="confirm-button" onClick={handleSubmit}>Confirm</button>
                </div>
            </div>
        </ModalComponent>
    )


};

export default CreateAssessment;
