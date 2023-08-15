import React from "react";
import './style.css';
import { useState} from "react";

import Classwork from "../../../Components/Student/Classwork";
import Navbar from "../../../Components/Common/Navbar";
import {useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Sidebar from "../../../Components/Common/Sidebar";
const ClassworkComponent=()=>{
    const {id} = useParams();
    const stream_id=id;
    const ass={"title": "AI Assignment",
                "description": "Implement a sentiment analysis model using a neural network architecture. The model should be trained on a dataset of movie reviews and be able to classify the sentiment of a given review as positive or negative.",
                "submissionDate": "2022-10-15",
                "dueDate": "2022-10-30",
                "dueTime":"11:59",
                "grade":"100",
                "attachment": "https://example.com/ai_assignment.pdf"
    }
    const [activeTab,setActiveTab]=useState("Classwork");
    const navigation=useNavigate();
    if (activeTab==="Stream"){
        navigation('/student/my courses')
        setActiveTab("Stream")
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
                    selected={"Classwork"}
                    onTabChanged={(tab)=>{setActiveTab(tab)}} />   
                <div className="flex column course-stream">
                    <div className="stream-head rounded blue-bg white-color">
                    <span>Course Name</span>
                    </div>
                    <div className="spacer-30"></div>
                    <div className="flex center primary-">
                        <Classwork ass={ass}/>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default ClassworkComponent;