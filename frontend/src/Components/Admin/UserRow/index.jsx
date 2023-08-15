import React from "react";
import "./style.css";
import { LiaUserEditSolid } from "react-icons/lia";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

const UserRow = ({ user, onDelete, onUpdate }) => {
	return (
		<div className="user-row">
			<div className="name">{user.full_name}</div>
			<div className="role">{user.user_type.name}</div>
			<div className="actions">
				<div className="edit" onClick={() => onUpdate(user.id)}>
					<MdOutlineEdit />
				</div>
				<div className="delete" onClick={() => onDelete(user.id)}>
					<MdOutlineDelete />
				</div>
			</div>
		</div>
	);
};

export default UserRow;
