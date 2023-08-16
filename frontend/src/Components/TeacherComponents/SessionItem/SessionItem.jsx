import "./style.css";
import { useState } from "react";
import Attendance from "../Attendance/Attendance";

const SessionItem = ({ meeting, students, toggleModal2 }) => {
    const { name, date_time, link } = meeting;

    const handleSessionClick = (date_time) => {
        toggleModal2();
    }

    return (
        <div className="meeting-item" onClick={ () => handleSessionClick(date_time)}>
            <div className="meeting-item__date">{date_time}</div>
            <div className="meeting-item__link"><a href={link}>Join Session</a></div>
        </div>
    );
};

export default SessionItem;