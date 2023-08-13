import "./styles/App.css";
import "./styles/colors.css";
import "./styles/utilities.css";
import "./styles/text.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthorizationPage from "./Pages/Common/Authorization";
import AdminLandingPage from "./Pages/Admin/Landing";
import ParentLandingPage from "./Pages/Parent/Landing";
import StudentLandingPage from "./Pages/Student/Landing";
import TeacherLandingPage from "./Pages/Teacher/Landing";
import E404 from "./Pages/E404";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AuthorizationPage />} />
				<Route path="/admin" element={<AdminLandingPage />} />
				<Route path="/teacher" element={<TeacherLandingPage />} />
				<Route path="/student" element={<StudentLandingPage />} />
				<Route path="/parent" element={<ParentLandingPage />} />
				<Route path="*" element={<E404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
