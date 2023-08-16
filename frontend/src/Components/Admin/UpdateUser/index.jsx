import { useEffect, useState } from "react";
import ModalComponent from "../../Base/Modal/modal";

const UpdateUser = ({ showModal, toggleModal, handleRequest, user }) => {
	const [updatedUserData, setUpdatedUserData] = useState(user);

	useEffect(() => {
		setUpdatedUserData(user);
	}, [user]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUpdatedUserData((prevUserData) => ({
			...prevUserData,
			[name]: value,
		}));
	};

	const handleSubmit = () => {
		handleRequest(updatedUserData);
	};
	return (
		<ModalComponent showModal={showModal} onRequestClose={toggleModal}>
			<div className="create-user__form">
				<h1>Update user</h1>
				<div className="create-user__input">
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						name="first_name"
						id="firstName"
						placeholder="First Name"
						value={updatedUserData.first_name}
						onChange={handleInputChange}
					/>
				</div>
				<div className="create-user__input">
					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						name="last_name"
						id="lastName"
						placeholder="Last Name"
						value={updatedUserData.last_name}
						onChange={handleInputChange}
					/>
				</div>
				<div className="create-user__input">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						id="email"
						placeholder="Email Address"
						value={updatedUserData.email}
						onChange={handleInputChange}
					/>
				</div>
				<div className="create-user__input">
					<label htmlFor="password">Password</label>
					<input
						type="text"
						name="password"
						id="password"
						placeholder="Password"
						value={updatedUserData.password}
						onChange={handleInputChange}
					/>
				</div>
				<div className="create-user__buttons">
					<button className="cancel-button" onClick={toggleModal}>
						Cancel
					</button>
					<button className="confirm-button" onClick={handleSubmit}>
						Confirm
					</button>
				</div>
			</div>
		</ModalComponent>
	);
};

export default UpdateUser;
