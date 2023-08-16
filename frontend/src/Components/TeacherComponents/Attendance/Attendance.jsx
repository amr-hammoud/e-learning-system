import ModalComponent from "../../Base/Modal/modal";
import { sendRequest } from "../../../config/request";
import { useState } from "react";
import "./style.css";


const Attendance = ({showModal2 , toggleModal2, date_time, students }) => {

    const handleSubmit = async (e) => {};

    return (
        <ModalComponent showModal={showModal2} onRequestClose={toggleModal2}>
            <div className="teacher-attendance">
                <h1>{date_time}</h1>
                <h2>Attendance</h2>
                <div className="teacher-attendance__list">
                    {students?.map((student, index) => (
                        <div className="teacher-attendance__list__item" key={index}>
                            <div className="teacher-attendance__list__name">{student.name}</div>
                            <div className="teacher-attendance__list__status">
                                <label htmlFor="present"></label>
                                <input type="checkbox" name="present" id="present"  /></div>
                            </div>
                    ))}
                 </div>
                 <div className="attendance__buttons">
                  <button className="cancel-button" onClick={toggleModal2}>Cancel</button>
                  <button type="submit" className="confirm-button" onClick={handleSubmit}>Confirm</button>
                </div>
            </div>
            
        </ModalComponent>
    )


};

export default Attendance;
