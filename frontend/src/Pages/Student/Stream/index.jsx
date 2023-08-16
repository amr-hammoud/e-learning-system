import React from "react";
import './style.css';
import Navbar from "../../../Components/Common/Navbar";
import { useState,useEffect } from "react";
import Sidebar from "../../../Components/Common/Sidebar";
import { sendRequest } from "../../../config/request";
import {useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CourseStream from "../../../Components/Student/CourseStream";
const StudentStream=()=>{
    const {id} = useParams();
    const course_id=id;
    console.log(course_id);
    const [streamA, setStreamA] = useState([]);
    const getCourseMaterialAndAssessments=async ()=>{
		try{
			const response=await sendRequest({
				method:"POST",
				route:"/student/progress-tracking/get-assesments",
				body:" ",
				includeHeaders:true
			})
			console.log(response);
			setStreamA(response);
		}catch (error) {
			console.log(error);
        }
	}
	useEffect(() => {getCourseMaterialAndAssessments();},[]);
    const [activeTab,setActiveTab]=useState("Stream");
    const navigation=useNavigate();
    if (activeTab==="Classwork"){
        navigation('/student/my courses/course/classwork/assessment/1')
        setActiveTab("Classwork")
    }
    if (activeTab==="Sessions"){
        navigation('/student/my courses/course/sessions')
        setActiveTab("Sessions")
    }
     if (activeTab==="Chat"){
        navigation('/student/my courses/message/teacher')
        setActiveTab("Chat")
    }
     if (activeTab==="Progress"){
        navigation('/student/my courses/course/progress')
        setActiveTab("Progress")
    }
    if (activeTab==="Notification"){
        navigation('/student/my courses/course/notification')
        setActiveTab("Notification")
    }
    return (
        <div className="page flex">
            <Sidebar
			    items={["My Courses", "Browse", "Messages", "Conferences"]}
			    selected={"My Courses"}
			/>
            <div class="course-stream-container primary-bg">
                <Navbar items={["Stream","Classwork","Sessions","Chat","Progress","Notifications"]} 
                    selected={"Stream"}
                    onTabChanged={(tab)=>{setActiveTab(tab)}} />   
                <div className="flex column course-stream">
                    <div className="spacer-30"></div>
                    <div className="stream-container flex column">
                        {streamA.map((stream, index) => {
				        return <CourseStream stream={stream} key={index}  />;
			            })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default StudentStream;