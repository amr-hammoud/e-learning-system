import React, { useEffect, useState } from "react";
import "./style.css";
import Sidebar from "../../../Components/Common/Sidebar";
import UserRow from "../../../Components/Admin/UserRow";
import { sendRequest } from "../../../config/request";
import CreateOrUpdateUser from "../../../Components/Admin/CreateOrUpdateUser";

const AdminUsersPage = () => {
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		const response = await sendRequest({
			method: "GET",
			route: "/admin/user/all",
		});
		setUsers(response.users);
	};

	return (
		<div className="page flex">
			<Sidebar
				items={["Dashboard", "Users", "Courses", "Support", "Settings"]}
				selected={"Users"}
			/>
			<div className="container">
				<h1>Users</h1>
				<div className="users-container">
					<div className="users-header">
						<div className="users-header-name">User Name</div>
						<div className="users-header-role">Role</div>
						<div className="users-header-actions">Actions</div>
					</div>

					{users.map((user, index) => {
						return (
							<UserRow
								key={index}
								user={user}
								onDelete={(id) => deleteUser(id)}
								onUpdate={(id) => updateUser(id)}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AdminUsersPage;
