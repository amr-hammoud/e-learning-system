import { useState } from "react";
import ModalComponent from "../../Base/Modal/modal";
import "./style.css";

const CreateCourse = ({ showModal, toggleModal, handleRequest }) => {
	const [formData, setFormData] = useState({
		name: "",
		subject: "",
		description: "",
		max_enrollments: "",
		total_sessions: "",
		total_assignments: "",
		total_quizzes: "",
		start_date: "",
		end_date: "",
		meeting_link: "",
		teacher_id: "",
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
			<div className="create-course__form">
				<h1>Create Course</h1>
				<div className="create-course__group">
					<div className="create-course__input">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Course Name"
							value={formData.name}
							onChange={handleInputChange}
						/>
					</div>
					<div className="create-course__input">
						<label htmlFor="subject">Subject</label>
						<input
							type="text"
							name="subject"
							id="subject"
							placeholder="Subject"
							value={formData.subject}
							onChange={handleInputChange}
						/>
					</div>

					<div className="create-course__input">
						<label htmlFor="description">Description</label>
						<input
							type="text"
							name="description"
							id="description"
							placeholder="Course Description"
							value={formData.description}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<div className="create-course__group">
					<div className="create-course__input">
						<label htmlFor="total_sessions">Total Sessions</label>
						<input
							type="number"
							name="total_sessions"
							id="total_sessions"
							placeholder="Total Sessions"
							value={formData.total_sessions}
							onChange={handleInputChange}
						/>
					</div>

					<div className="create-course__input">
						<label htmlFor="total_sessions">
							Total Assignments
						</label>
						<input
							type="number"
							name="total_assignments"
							id="total_assignments"
							placeholder="Total Assignments"
							value={formData.total_assignments}
							onChange={handleInputChange}
						/>
					</div>

					<div className="create-course__input">
						<label htmlFor="total_quizzes">Total Quizzes</label>
						<input
							type="number"
							name="total_quizzes"
							id="total_quizzes"
							placeholder="Total Quizzes"
							value={formData.total_quizzes}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<div className="create-course__group">
					<div className="create-course__input">
						<label htmlFor="max_enrollments">Max Enrollments</label>
						<input
							type="number"
							name="max_enrollments"
							id="max_enrollments"
							placeholder="Max Enrollments"
							value={formData.max_enrollments}
							onChange={handleInputChange}
						/>
					</div>
					<div className="create-course__input">
						<label htmlFor="meeting_link">Meeting Link</label>
						<input
							type="text"
							name="meeting_link"
							id="meeting_link"
                            placeholder="Meeting Link"
							value={formData.meeting_link}
							onChange={handleInputChange}
						/>
					</div>

					<div className="create-course__input">
						<label htmlFor="teacher_id">Teacher</label>
						<input
							type="number"
							name="teacher_id"
							id="teacher_id"
                            placeholder="Teacher"
							value={formData.teacher_id}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="create-course__group">
					<div className="create-course__input">
						<label htmlFor="start_date">Start Date</label>
						<input
							type="datetime-local"
							name="start_date"
							id="start_date"
							value={formData.start_date}
							onChange={handleInputChange}
						/>
					</div>

					<div className="create-course__input">
						<label htmlFor="end_date">End Date</label>
						<input
							type="datetime-local"
							name="end_date"
							id="end_date"
							value={formData.end_date}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="create-course__buttons">
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

export default CreateCourse;
