import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { BiLogOut } from "react-icons/bi";
import logo from "../../../assets/logo.png";
import SidebarItem from "../../Base/SidebarItem";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ items, selected = items[0] }) => {
	const [selectedTab, setSelectedTab] = useState(selected);
	const location = useLocation();

	const selectHandler = (label) => {
		setSelectedTab(label);
	};

	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("access_token") == null) {
			navigate("/");
		} else {
			const role = localStorage.getItem("role");
			const base_location = location.pathname.split("/")[1];

			if (role.toLowerCase() !== base_location.toLowerCase()) {
				navigate("/e401");
			}
		}
	}, []);

	const logoutButton = useRef();

	const handleLogout = () => {
		logoutButton.current.textContent = "Logging Out...";
		setTimeout(() => {
			localStorage.removeItem("access_token");
			localStorage.removeItem("role");
			navigate("/");
		}, 1000);
	};

	return (
		<div className="sidebar">
			<div className="logo">
				<img src={logo} alt=" logo " />
			</div>
			<div className="items">
				{items?.map((item, index) => {
					return (
						<SidebarItem
							key={index}
							label={item}
							selected={selectedTab === item}
							onSelected={(label) => selectHandler(label)}
						/>
					);
				})}
			</div>
			<div
				className="logout"
				onClick={() => handleLogout()}
				ref={logoutButton}
			>
				<BiLogOut />
				Logout
			</div>
		</div>
	);
};

export default Sidebar;
