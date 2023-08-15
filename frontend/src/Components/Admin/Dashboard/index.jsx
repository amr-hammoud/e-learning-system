import React, { useEffect, useState } from "react";
import Sidebar from "../../Common/Sidebar";
import Navbar from "../../Common/Navbar";

const AdminDashboardPage = () => {

    const [activeTab, setActiveTab] = useState("Stream");

    useEffect(() => {
        console.log(activeTab);
        //Add if else to render your desired component

    }, [activeTab]);


	return (
		<div className="page flex">
			<Sidebar
				items={["Dashboard", "Users", "Courses", "Settings", "Support"]}
				selected={"Dashboard"}
			/>
			<div className="container">
                <Navbar items={["Stream", "Users", "Courses", "Settings", "Support"]}
				selected={"Stream"}
                onTabChanged={(tab) => {setActiveTab(tab)}}/>
                </div>
		</div>
	);
};

export default AdminDashboardPage;
