import "./styles/App.css";
import "./styles/colors.css";
import "./styles/utilities.css";
import "./styles/text.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthorizationPage from "./Pages/Common/Authorization";
import ParentLandingPage from "./Pages/Parent/Landing";
import StudentLandingPage from "./Pages/Student/Landing";
import E404 from "./Pages/E404";
import TeacherCoursesPage from "./Pages/Teacher/Courses";
import TeacherMessagesPage from "./Pages/Teacher/Messages";
import TeacherConferencesPage from "./Pages/Teacher/Conferences";
import AdminDashboardPage from "./Pages/Admin/Dashboard";
import AdminCoursesPage from "./Pages/Admin/Courses";
import AdminUsersPage from "./Pages/Admin/Users";
import AdminSupportPage from "./Pages/Admin/Support";
import AdminSettingsPage from "./Pages/Admin/Settings";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AuthorizationPage />} />
				<Route path="/teacher/courses" element={<TeacherCoursesPage />} />
				<Route path="/teacher/messages" element={<TeacherMessagesPage />} />
				<Route path="/teacher/conferences" element={<TeacherConferencesPage />} />
				<Route path="/admin/dashboard" element={<AdminDashboardPage />} />
				<Route path="/admin/users" element={<AdminUsersPage />} />
				<Route path="/admin/courses" element={<AdminCoursesPage />} />
				<Route path="/admin/support" element={<AdminSupportPage />} />
				<Route path="/admin/settings" element={<AdminSettingsPage />} />
				<Route path="/student" element={<StudentLandingPage />} />
				<Route path="/parent" element={<ParentLandingPage />} />
				<Route path="*" element={<E404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
