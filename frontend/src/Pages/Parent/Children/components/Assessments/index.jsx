import React, { useEffect, useState } from 'react'
import Sidebar from '../../../../../Components/Common/Sidebar'
import Navbar from '../../../../../Components/Common/Navbar'
import ChildrenProgressBar from '../ChildrenProgressBar'
import Header from '../Header'
import './style.css'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios"
const Assessments = () => {
  const [activeTab, setActiveTab] = useState("Stream");
  const navigation = useNavigate();
  const location = useLocation();
  const [assessmentData, setAssessmentData] = useState([]);
useEffect(() => {
    console.log(activeTab);
    
    if(activeTab === "Notifications"){
      const base_location = location.pathname.split("/")[1];
      navigation(`/${base_location}/notifications`);
      setActiveTab("Notifications")
    }
    else if (activeTab === "Progress"){
      const base_location = location.pathname.split("/")[1];
      navigation(`/${base_location}/Assessments`);
      setActiveTab("Progress")
    }
    

}, [activeTab]);

useEffect(() => {
  async function fetchData() {
    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
      const response = await axios.get("http://127.0.0.1:8000/api/parent/get-student-progress-of-course");

      // Assuming response.data is the array you described
      const assessmentItems = response.data.info[0].grades.map((gradeData) => ({
        course_name: response.data.info[0]['course-name'],
        assessment_name: gradeData.assessment,
        grade: gradeData.grade
      }));

      setAssessmentData(assessmentItems);
    } catch (error) {
      console.error("Error fetching assessment data:", error);
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
          <Header title={"Assessments"}/>
          <div>
          {assessmentData.map((assessment, index) => (
          <ChildrenProgressBar
            key={index}
            courseName={assessment.course_name}
            assessmentTitle={assessment.assessment_name}
            grade={assessment.grade}
          />
        ))}
          </div>
      </div>
    </div>
  )
}

export default Assessments







