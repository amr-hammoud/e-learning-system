import React from "react";
import './style.css';
import Session from "../../../Components/Student/Session";
import { useState} from "react";
import Navbar from "../../../Components/Common/Navbar";
import { useParams } from "react-router-dom";
import Sidebar from "../../../Components/Common/Sidebar";
import {useNavigate } from "react-router-dom";

const SessionComponent=()=>{
const {id} = useParams();


    const session={
        "date":"2022-10-30",
        "time":"10:00",
        "link":"https://meet.google.com/abc123xyz"
    }
    const [activeTab,setActiveTab]=useState("Sessions");
    const navigation=useNavigate();
    if (activeTab==="Stream"){
        navigation('/student/my courses')
        setActiveTab("Stream")
    }
    if (activeTab==="Classwork"){
        navigation('/student/my courses/course/classwork/assessment/1')
        setActiveTab("Classwork")
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
                            selected={"Sessions"}
                            onTabChanged={(tab)=>{setActiveTab(tab)}} />   
                <div className="flex column course-stream">
                    <div className="stream-head rounded blue-bg white-color">
                    <span>Course Name</span>
                    </div>
                    <div className="spacer-30"></div>
                    <Session session={session}/>
                    <Session session={session}/>
                </div>
            </div>
        </div>
    );
}
export default SessionComponent;