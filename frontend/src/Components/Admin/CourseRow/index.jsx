import React from "react";
import "./style.css";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

const CourseRow = ({ course, onDelete, onUpdate }) => {
	return (
		<div className="course-row">
			<div className="name flex column">
				<div>{course?.name}</div>
				<div>{course?.subject}</div></div>
			<div className="teacher">{course?.teacher.full_name}</div>
			<div className="actions">
				<div className="edit" onClick={() => onUpdate(course)}>
					<MdOutlineEdit />
				</div>
				<div className="delete" onClick={() => onDelete(course?.id)}>
					<MdOutlineDelete />
				</div>
			</div>
		</div>
	);
};

export default CourseRow;
