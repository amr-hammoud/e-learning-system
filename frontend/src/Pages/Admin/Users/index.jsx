import React, { useEffect, useState } from "react";
import "./style.css";
import Sidebar from "../../../Components/Common/Sidebar";
import UserRow from "../../../Components/Admin/UserRow";
import { sendRequest } from "../../../config/request";
import CreateUser from "../../../Components/Admin/CreateUser";
import UpdateUser from "../../../Components/Admin/UpdateUser";

const AdminUsersPage = () => {
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		const response = await sendRequest({
			method: "GET",
			route: "/admin/user/all",
		});
		setUsers(response.users);
	};

	const deleteUser = async (id) => {
		const response = await sendRequest({
			method: "DELETE",
			route: `/admin/user/delete/${id}`,
		});
		if (response.status === "success") {
			fetchUsers();
		}
	};

	const updateUser = async (updatedUserData) => {
		const response = await sendRequest({
			method: "POST",
			route: `/admin/user/update/${updatedUserData.id}`,
			body: updatedUserData,
		});
		if (response.status === "success") {
			fetchUsers();
			toggleUpdateModal();
		}
	};

	const createUser = async (userData) => {
		console.log("DATA: ", userData);
		const response = await sendRequest({
			method: "POST",
			route: "/admin/user/create",
			body: userData,
		});
		console.log(response);
		if (response.status === "success") {
			fetchUsers();
			toggleCreateModal();
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const [showCreateModal, setShowCreateModal] = useState(false);
	const toggleCreateModal = () => {
		setShowCreateModal(!showCreateModal);
	};

	const [showUpdateModal, setShowUpdateModal] = useState(false);
	const toggleUpdateModal = () => {
		setShowUpdateModal(!showUpdateModal);
	};

	const [userData, setUserData] = useState({});

	return (
		<div className="page flex">
			<Sidebar
				items={["Dashboard", "Users", "Courses", "Support", "Settings"]}
				selected={"Users"}
			/>
			<div className="container">
				<div className="flex spaceBetween">
					<h1>Users</h1>
					<button onClick={toggleCreateModal}>Create User</button>
				</div>
				<div className="list-container">
					<div className="list-header">
						<div className="users-header-name">User Name</div>
						<div className="users-header-role">Role</div>
						<div className="users-header-actions">Actions</div>
					</div>

					<CreateUser
						showModal={showCreateModal}
						toggleModal={toggleCreateModal}
						handleRequest={createUser}
					/>

					<UpdateUser
						showModal={showUpdateModal}
						toggleModal={toggleUpdateModal}
						handleRequest={updateUser}
						user={userData}
						handleUserData={setUserData}
					/>

					{users.map((user, index) => {
						return (
							<UserRow
								key={index}
								user={user}
								onDelete={(id) => deleteUser(id)}
								onUpdate={() => {setUserData(user);
									toggleUpdateModal()}}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AdminUsersPage;
