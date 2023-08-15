import "./styles/App.css";
import "./styles/colors.css";
import "./styles/utilities.css";
import "./styles/text.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthorizationPage from "./Pages/Common/Authorization";
import AdminLandingPage from "./Pages/Admin/Landing";
import ParentLandingPage from "./Pages/Parent/Landing";
import StudentLandingPage from "./Pages/Student/Landing";
import E404 from "./Pages/E404";
import TeacherCoursesPage from "./Pages/Teacher/Courses";
import TeacherMessagesPage from "./Pages/Teacher/Messages";
import TeacherConferencesPage from "./Pages/Teacher/Conferences";
import StudentBrowsePage from "./Pages/Student/Browse";
import StudentCoursesPage from "./Pages/Student/MyCourses";
import StudentMessagesPage from "./Pages/Student/Messages";
import StudentConferencesPage from "./Pages/Student/Conferences";
import MessageComponent from "./Pages/Student/MessageTeacher";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AuthorizationPage />} />
				<Route path="/admin" element={<AdminLandingPage />} />
				<Route path="/teacher/courses" element={<TeacherCoursesPage />} />
				<Route path="/teacher/messages" element={<TeacherMessagesPage />} />
				<Route path="/teacher/conferences" element={<TeacherConferencesPage />} />
				<Route path="/student" element={<StudentLandingPage />} />
				<Route path="/parent" element={<ParentLandingPage />} />

				<Route path="/student/browse" element={<StudentBrowsePage />} />
				<Route path="/student/my courses" element={<StudentCoursesPage />} />
				<Route path="/student/messages" element={<StudentMessagesPage />} />
				<Route path="/student/conferences" element={<StudentConferencesPage />} />
				<Route path="student/my courses/message/teacher" element={<MessageComponent/>}/>
				<Route path="*" element={<E404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
