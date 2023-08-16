import React from "react";

const ChatRow = ({ chat, activeChat, setActive }) => {
	const clickHandler = () => {
		setActive(chat);
	};

	return (
		<div
			className={activeChat ? "flex chat-row active" : "flex chat-row"}
			onClick={() => clickHandler(chat)}
		>
			<div className="name">{chat?.full_name}</div>
		</div>
	);
};

export default ChatRow;
