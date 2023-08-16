import React, { useEffect, useState } from "react";
import "./style.css";
import Sidebar from "../../../Components/Common/Sidebar";
import { sendRequest } from "../../../config/request";
import ChatRow from "../../../Components/Admin/Messaging/ChatRow";
import { AiOutlineSend } from "react-icons/ai";
import Message from "../../../Components/Admin/Messaging/Message";

const AdminSupportPage = () => {
	const [chats, setChats] = useState([]);

	const fetchUsers = async () => {
		const response = await sendRequest({
			method: "GET",
			route: "/admin/user/all",
		});
		setChats(response.users);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const [activeChat, setActiveChat] = useState(null);
	const selectHandler = (user) => {
		setActiveChat(user);
	};

	const [messages, setMessages] = useState([])
	useEffect(()=>{
		// fetchMessages()
	}, [activeChat])



	// const fetchMessages = async () => {
	// 	const response = await sendRequest({
	// 		method: "POST",
	// 		route: "/admin/user/create",
	// 	});
	// }


	return (
		<div className="page flex">
			<Sidebar
				items={["Dashboard", "Users", "Courses", "Support", "Settings"]}
				selected={"Support"}
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

export default AdminSupportPage;
