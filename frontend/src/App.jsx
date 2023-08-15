import "./styles/App.css";
import "./styles/colors.css";
import "./styles/utilities.css";
import "./styles/text.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthorizationPage from "./Pages/Common/Authorization";
import AdminLandingPage from "./Pages/Admin/Landing";
import ParentLandingPage from "./Pages/Parent/Landing";
import StudentLandingPage from "./Pages/Student/Landing";
import E404 from "./Pages/E404";
import TeacherCoursesPage from "./Pages/Teacher/Courses";
import TeacherMessagesPage from "./Pages/Teacher/Messages";
import TeacherConferencesPage from "./Pages/Teacher/Conferences";
import AdminDashboardPage from "./Components/Admin/Dashboard";

function App() {

	const [user, setUser] = useState({
		first_name: "",
		last_name: "",
		email: "",
		role: "",
	});

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AuthorizationPage user={user} setUser={setUser} />} />
				<Route path="/admin" element={<AdminLandingPage />} />
				<Route path="/teacher/courses" element={<TeacherCoursesPage />} />
				<Route path="/teacher/messages" element={<TeacherMessagesPage />} />
				<Route path="/teacher/conferences" element={<TeacherConferencesPage />} />
				<Route path="/admin/dashboard" element={<AdminDashboardPage />} />
				<Route path="/student" element={<StudentLandingPage />} />
				<Route path="/parent" element={<ParentLandingPage />} />
				<Route path="*" element={<E404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
