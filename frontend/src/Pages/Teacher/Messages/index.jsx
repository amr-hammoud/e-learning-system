import React, { useEffect, useState } from "react";
import "./style.css";
import Sidebar from "../../../Components/Common/Sidebar";
import { sendRequest } from "../../../config/request";
import ChatRow from "../../../Components/Admin/Messaging/ChatRow";
import { AiOutlineSend } from "react-icons/ai";
import Message from "../../../Components/Admin/Messaging/Message";

const TeacherMessagesPage = () => {
	const [chats, setChats] = useState([]);

	const fetchUsers = async () => {
		const users = [{
			id: 1,
			name: "John Doe",	
		},
		{
			id: 2,
			name: "John Doe",
		}
	]

		setChats([
			{
				id: 1,
				name: "John Doe",
				lastMessage: "Hello",
				lastMessageTime: "12:00",
				unread: 2,
			},
			{
				id: 2,
				name: "John Doe",
				lastMessage: "Hello",
				lastMessageTime: "12:00",
				unread: 2,
			}
		]);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const [activeChat, setActiveChat] = useState(null);
	const selectHandler = (user) => {
		setActiveChat(user);
	};

	const [messages, setMessages] = useState([])
	


	return (
		<div className="page flex">
			<Sidebar
				items={["Courses", "Messages", "Conferences"]}
				selected={"Messages"}
			/>
			<div className="support-container">
				<div className="chats-parent">
					<div className="chats-container">
						{chats.map((chat, index) => {
							return (
								<ChatRow
									key={index}
									chat={chat}
									activeChat={activeChat === chat}
									setActive={(chat) => selectHandler(chat)}
								/>
							);
						})}
					</div>
					<div className="messages-container">
						<div className="messages">
							<Message />
						</div>
						<div className="messages-input-container">
							<textarea />
							<div className="send-button">
								<AiOutlineSend />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeacherMessagesPage;
