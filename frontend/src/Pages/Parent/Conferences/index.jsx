import React from 'react'
import './style.css'
import Sidebar from "../../../Components/Common/Sidebar";

import ConferencesCard from './ConferencesCard';
const ParentConferencesPage = () => {
  const children = ["Youssef","Houssein"];
  return (
    <div className="page flex">
			<Sidebar items = {["Children","Messages", "Conferences"]} selected={"Conferences"} />
			{children?.map((child) => {
					return (
						<ConferencesCard 
              backgroundColor={Math.floor(Math.random() * (4 - 1 + 1)) + 1}
              text = {child}
              subname={child}
            />
					);
				})}
		</div>
  )
}

export default ParentConferencesPage