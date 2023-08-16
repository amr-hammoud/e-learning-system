import React, { useEffect, useState } from "react";
import "./style.css";
import ChatRow from "../../Admin/Messaging/ChatRow";
import { AiOutlineSend } from "react-icons/ai";
import ChatBox from "../../../Pages/Parent/Messages/components/ChatBox";
import Message from "../../Admin/Messaging/Message";

const DiscussionTab = () => {
	const [chats, setChats] = useState([]);

	const fetchUsers = () => {
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

export default DiscussionTab;
