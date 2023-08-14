import React, { useState } from "react";
import "./style.css";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPersonVideo } from "react-icons/bs";
import { LuMessagesSquare } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

function SidebarItem({ label, selected, onSelected }) {
	const navigation = useNavigate();
	const location = useLocation();
	const base_location = location.pathname.split("/")[1];
	const clickHandler = () => {
		onSelected(label);
		navigation(`/${base_location}/${label.toLowerCase()}`);
	};

	let icon;

	if (label === "Courses" || label === "My Courses") {
		icon = <AiOutlineUnorderedList />;
	} else if (label === "Messages") {
		icon = <LuMessagesSquare />;
	} else if (label === "Conferences") {
		icon = <BsPersonVideo />;
	} else if (label === "Browse") {
		icon = <BiSearch />;
	} else {
		icon = "label error";
	}
	return (
		<div
			className={selected ? `sidebar-item active` : `sidebar-item`}
			onClick={() => clickHandler()}
		>
			{icon}
			{label}
		</div>
	);
}

export default SidebarItem;
