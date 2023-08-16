import React, { useEffect, useState } from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'
import Navbar from '../../../../../Components/Common/Navbar'
import ChildrenProgressBar from '../ChildrenProgressBar'
import Header from '../Header'
import "./style.css"
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom'
const Attendances = () => {
  const [activeTab, setActiveTab] = useState("Stream");
  const navigation = useNavigate();
	const location = useLocation();
  const [attendanceData, setAttendanceData] = useState([]);
  useEffect(() => {
    if(activeTab === "Notifications"){
      console.log("noti")
      
      const base_location = location.pathname.split("/")[1];
      navigation(`/${base_location}/notifications`);
      setActiveTab("Notifications")
    }
    else if (activeTab === "Progress"){
      const base_location = location.pathname.split("/")[1];
      navigation(`/${base_location}/Attendances`);
      setActiveTab("Progress")
    }
      
      
  
  }, [activeTab]);
  useEffect(() => {
    async function fetchData() {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        const response = await axios.post("http://127.0.0.1:8000/api/parent/get-student-attendance-records"); 
        setAttendanceData(response.data.attendance);
      } catch (error) {
        console.error("Error fetching attendance data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className='flex'>
      <Sidebar items = {["Children","Messages", "Conferences"]} selected={"Children"} />
      <div className='bar-container flex column'>
      <Navbar items={["Progress", "Notifications"]}
            selected={"Progress"}
            onTabChanged={(tab) => {setActiveTab(tab)}}/>
          <Header title={"Attendances"}/>
          <div>
          {attendanceData.map((attendance, index) => (
            <ChildrenProgressBar
              key={index}
              name={attendance.course_name}
              presence={attendance.attendance === 1 ? "present" : "absent"}
            />
          ))}
          </div>
      </div>
    </div>
  )
}

export default Attendances