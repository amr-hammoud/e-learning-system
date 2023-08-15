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
import ChildrenProgressDetails from "./Pages/Parent/Children/components/ChildrenProgressDetails";
import Assignments from "./Pages/Parent/Children/components/Assignments";
import Quizzes from "./Pages/Parent/Children/components/Quizzes";
import Attendances from "./Pages/Parent/Children/components/Attendance";
import Chat from "./Pages/Parent/Messages/components/Chat";
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
				<Route path="/parent/ChildrenProgressDetails" element={<ChildrenProgressDetails />} />
				<Route path="/parent/Assignments" element={<Assignments />} />
				<Route path="/parent/Quizzes" element={<Quizzes />} />
				<Route path="/parent/Attendances" element={<Attendances />} />
				<Route path="/parent/Chat" element={<Chat />} />
				
				<Route path="*" element={<E404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
