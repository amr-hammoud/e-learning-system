import React, { useState, useEffect } from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import CourseCompletionChart from "../../../Components/Admin/Charts/CourseCompletion";
import { sendRequest } from "../../../config/request";
import "./style.css";

const AdminDashboardPage = () => {
	const [courseCompletionData, setCourseCompletionData] = useState([]);

	useEffect(() => {
		const fetchAnalyticsData = async () => {
			try {
				const response = await sendRequest({
					method: "GET",
					route: "/admin/analytics/courses",
				});
				const analyticsData = response.courses.map((course) => ({
					course: course.name,
					analytics: course.analytics,
				}));
				console.log(analyticsData);
				setCourseCompletionData(analyticsData);
			} catch (error) {
				console.error("Error fetching analytics data:", error);
			}
		};

		fetchAnalyticsData();
	}, []);

	return (
		<div className="page flex">
			<Sidebar
				items={["Dashboard", "Users", "Courses", "Support", "Settings"]}
				selected={"Dashboard"}
			/>
			<div className="container">
				<h1>Dashboard</h1>
				<div className="dashboard-content">
					<h2>Course Completion</h2>
					<CourseCompletionChart data={courseCompletionData} />
				</div>
			</div>
		</div>
	);
};

export default AdminDashboardPage;
