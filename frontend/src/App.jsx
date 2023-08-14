import "./styles/App.css";
import "./styles/colors.css";
import "./styles/utilities.css";
import "./styles/text.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthorizationPage from "./Pages/Common/Authorization";
import AdminLandingPage from "./Pages/Admin/Landing";
import StudentLandingPage from "./Pages/Student/Landing";
import E404 from "./Pages/E404";
import TeacherCoursesPage from "./Pages/Teacher/Courses";
import TeacherMessagesPage from "./Pages/Teacher/Messages";
import TeacherConferencesPage from "./Pages/Teacher/Conferences";
import ParentMessagesPage from "./Pages/Parent/Messages";
import ParentConferencesPage from "./Pages/Parent/Conferences";
import ParentChildrenPage from "./Pages/Parent/Children";
import ChildrenProgress from "./Pages/Parent/Children/components/ChildrenProgress";


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
				<Route path="/parent/children" element={<ParentChildrenPage />} />
				<Route path="/parent/messages" element={<ParentMessagesPage />} />
				<Route path="/parent/conferences" element={<ParentConferencesPage />} />
				<Route path="/parent/ChildrenProgress" element={<ChildrenProgress />} />
				 
				<Route path="*" element={<E404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
