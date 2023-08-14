import React, { useState } from "react";
import "./style.css";
import logo from "../../../assets/logo.png";
import SidebarItem from "../../Base/SidebarItem";

function Sidebar({ items, selected = items[0] }) {
	const [selectedTab, setSelectedTab] = useState(selected);

	const selectHandler = (value) => {
		setSelectedTab(value);
	};

	return (
		<div className="sidebar">
			<div className="logo">
				<img src={logo} alt="" />
			</div>
			<div className="items">
				{items?.map((item) => {
					return (
						<SidebarItem
							label={item}
							selected={selectedTab === item}
							value={item}
							onSelected={(value) => selectHandler(value)}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Sidebar;
