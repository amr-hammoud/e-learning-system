import React, { useState } from "react";
import "./style.css";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { BsPersonVideo } from "react-icons/bs";
import { LuMessagesSquare } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

const SidebarItem = ({ label, selected, onSelected, setActiveCourse }) => {
	const navigation = useNavigate();
	const location = useLocation();
	const base_location = location.pathname.split("/")[1];
	const clickHandler = () => {
		setActiveCourse(null);
		onSelected(label);
		navigation(`/${base_location}/${label?.toLowerCase()}`);
	};

	let icon;

	if (label === "Courses" || label === "My Courses") {
		icon = <AiOutlineUnorderedList />;
	} else if (label === "Dashboard") {
		icon = <MdOutlineSpaceDashboard />;
	} else if (label === "Users" || label === "Children") {
		icon = <LuUsers />;
	} else if (label === "Support") {
		icon = <BiSupport />;
	} else if (label === "Settings") {
		icon = <LuSettings />;
	} else if (label === "Messages") {
		icon = <LuMessagesSquare />;
	} else if (label === "Conferences") {
		icon = <BsPersonVideo />;
	} else if (label === "Browse") {
		icon = <BiSearch />;
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
