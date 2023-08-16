import { useState } from "react";
import ModalComponent from "../../Base/Modal/modal";
import "./style.css";

const CreateUser = ({ showModal, toggleModal, handleRequest }) => {
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		role: "student",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = () => {
		handleRequest(formData);
	};

	return (
		<ModalComponent showModal={showModal} onRequestClose={toggleModal}>
			<div className="create-user__form">
				<h1>Create user</h1>
				<div className="create-user__input">
					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						name="first_name"
						id="firstName"
						placeholder="First Name"
						value={formData.first_name}
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
						value={formData.last_name}
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
						value={formData.email}
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
						value={formData.password}
						onChange={handleInputChange}
					/>
				</div>
				<div className="create-user__input">
					<label htmlFor="password">Role</label>
					<select
						name="role"
						id="role"
						value={formData.role}
						onChange={handleInputChange}
					>
						<option value="admin">Admin</option>
						<option value="teacher">Teacher</option>
						<option value="student">Student</option>
						<option value="parent">Parent</option>
					</select>
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

export default CreateUser;
