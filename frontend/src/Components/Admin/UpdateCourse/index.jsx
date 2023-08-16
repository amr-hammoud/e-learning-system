import { useEffect, useState } from "react";
import ModalComponent from "../../Base/Modal/modal";

const UpdateCourse = ({ showModal, toggleModal, handleRequest, course }) => {
	console.log(course);
	const [updatedCourseData, setUpdatedCourseData] = useState(course);

	useEffect(() => {
		setUpdatedCourseData(course);
	}, [course]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUpdatedCourseData((prevCourseData) => ({
			...prevCourseData,
			[name]: value,
		}));
	};

	const handleSubmit = () => {
		handleRequest(updatedCourseData);
	};
	return (
		<ModalComponent showModal={showModal} onRequestClose={toggleModal}>
			<div className="create-course__form">
				<h1>Update course</h1>
				<div className="create-course__group">
					<div className="create-course__input">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Course Name"
							value={updatedCourseData?.name}
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
							value={updatedCourseData?.subject}
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
							value={updatedCourseData?.description}
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
							value={updatedCourseData?.total_sessions}
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
							value={updatedCourseData?.total_assignments}
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
							value={updatedCourseData?.total_quizzes}
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
							value={updatedCourseData?.max_enrollments}
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
							value={updatedCourseData?.meeting_link}
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
							value={updatedCourseData?.teacher_id}
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
							value={updatedCourseData?.start_date}
							onChange={handleInputChange}
						/>
					</div>

					<div className="create-course__input">
						<label htmlFor="end_date">End Date</label>
						<input
							type="datetime-local"
							name="end_date"
							id="end_date"
							value={updatedCourseData?.end_date}
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

export default UpdateCourse;
