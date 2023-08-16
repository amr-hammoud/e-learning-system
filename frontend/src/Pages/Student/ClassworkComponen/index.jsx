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
    const assessment={"ssessment_type_id":"2",
        "attachment": "null",
        "course_id":"1",
        "created_at":"null",
        "description":"You are asked to implement a Contact Manager Website using React and Laravel\r\nUsers shall be able to view Contacts. A contact is defined by the name, phone number, address (Latitude and Longitude). Use cards to display the contacts. \r\nUsers shall be able ",
        "due_date" :"2023-08-20",
        "grade":"100",
        "id":"5",
        "title":" Contact Manager Website"
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
                    <div className="spacer-30"></div>
                    <div className="flex center primary-">
                        <Classwork assessment={assessment}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ClassworkComponent;