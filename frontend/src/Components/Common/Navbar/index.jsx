import React, { useState } from "react";
import "./style.css";
import NavbarItem from "../../Base/NavbarItem";

const Navbar = ({ items, selected = items[0], onTabChanged }) => {
	const [selectedTab, setSelectedTab] = useState(selected);

	const selectHandler = (label) => {
		setSelectedTab(label);
        onTabChanged(label)
	};
	return (
		<div className="navbar">
			{items?.map((item, index) => {
				return (
					<NavbarItem
						key={index}
						label={item}
						selected={selectedTab === item}
						onSelected={(label) => selectHandler(label)}
					/>
				);
			})}
		</div>
	);
};

export default Navbar;
