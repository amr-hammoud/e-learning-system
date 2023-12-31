import "./styles/App.css";
import "./styles/colors.css";
import "./styles/utilities.css";
import "./styles/text.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthPage from "./Pages/Common/Auth";
import StudentLandingPage from "./Pages/Student/Landing";
import E404 from "./Pages/Errors/E404";
import E401 from "./Pages/Errors/E401";
import TeacherCoursesPage from "./Pages/Teacher/Courses";
import TeacherMessagesPage from "./Pages/Teacher/Messages";
import TeacherConferencesPage from "./Pages/Teacher/Conferences";
import AdminDashboardPage from "./Pages/Admin/Dashboard";
import AdminCoursesPage from "./Pages/Admin/Courses";
import AdminUsersPage from "./Pages/Admin/Users";
import AdminSupportPage from "./Pages/Admin/Support";
import AdminSettingsPage from "./Pages/Admin/Settings";
import ParentMessagesPage from "./Pages/Parent/Messages";
import ParentConferencesPage from "./Pages/Parent/Conferences";
import ParentChildrenPage from "./Pages/Parent/Children";
import ChildrenProgress from "./Pages/Parent/Children/components/ChildrenProgress";
import ChildrenProgressDetails from "./Pages/Parent/Children/components/ChildrenProgressDetails";
import Assignments from "./Pages/Parent/Children/components/Assignments";
import Quizzes from "./Pages/Parent/Children/components/Quizzes";
import Attendances from "./Pages/Parent/Children/components/Attendance";
import Chat from "./Pages/Parent/Messages/components/Chat";
import Notifications from "./Pages/Parent/Children/components/Notifications";
import ConferencesModal from "./Pages/Parent/Conferences/ConferencesModal";
import StudentBrowsePage from "./Pages/Student/Browse";
import StudentCoursesPage from "./Pages/Student/MyCourses";
import StudentMessagesPage from "./Pages/Student/Messages";
import StudentConferencesPage from "./Pages/Student/Conferences";
import StudentStream from "./Pages/Student/Stream";
import MessageComponent from "./Pages/Student/MessageTeacher";
import NotificationComponent from "./Pages/Student/CourseNotification";
import ClassworkComponent from "./Pages/Student/ClassworkComponen";
import ProgressComponent from "./Pages/Student/ProgressComponent";
import SessionComponent from "./Pages/Student/SessionsComponent";
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
				<Route path="/" element={<AuthPage user={user} setUser={setUser} />} />
				<Route path="/teacher/courses" element={<TeacherCoursesPage />} />
				<Route path="/teacher/messages" element={<TeacherMessagesPage />} />
				<Route path="/teacher/conferences" element={<TeacherConferencesPage />} />
				<Route path="/admin/dashboard" element={<AdminDashboardPage />} />
				<Route path="/admin/users" element={<AdminUsersPage />} />
				<Route path="/admin/courses" element={<AdminCoursesPage />} />
				<Route path="/admin/support" element={<AdminSupportPage />} />
				<Route path="/admin/settings" element={<AdminSettingsPage />} />
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
				<Route path="/parent/notifications" element={<Notifications />} />
				<Route path="/parent/ConferencesModal" element={<ConferencesModal />} />

				<Route path="/student/browse" element={<StudentBrowsePage />} />
				<Route path="/student/my courses" element={<StudentCoursesPage />} />
				<Route path="/student/my courses/course/stream/:id" element={<StudentStream/>} />
				<Route path="/student/messages" element={<StudentMessagesPage />} />
				<Route path="/student/conferences" element={<StudentConferencesPage />} />
				<Route path="student/my courses/message/teacher" element={<MessageComponent/>}/>
				<Route path="student/my courses/course/notification" element={<NotificationComponent/>}/>
				<Route path="student/my courses/course/classwork/assessment/:id" element={<ClassworkComponent/>}/>
				<Route path="student/my courses/course/progress" element={<ProgressComponent/>}/>
				<Route path="student/my courses/course/sessions" element={<SessionComponent/>}/>


				<Route path="/e401" element={<E401 />} />
				<Route path="*" element={<E404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
