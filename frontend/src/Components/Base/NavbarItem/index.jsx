import React from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";

const NavbarItem = ({ label, selected, onSelected }) => {
	const clickHandler = () => {
		onSelected(label);
	};

	return (
		<div
			className={selected ? `navbar-item active` : `navbar-item`}
			onClick={() => clickHandler()}
		>
			{label}
		</div>
	);
};

export default NavbarItem;
