import React from 'react'
import './style.css'
import Sidebar from "../../../Components/Common/Sidebar";
import ChildCard from '../Children/components/ChildCard';
const ParentMessagesPage = () => {
  const children = ["Youssef","Houssein"];
  return (
    <div className="page flex">
			<Sidebar items = {["Children","Messages", "Conferences"]} selected={"Messages"} />
			{children?.map((child) => {
					return (
						<ChildCard 
              backgroundColor={Math.floor(Math.random() * (4 - 1 + 1)) + 1}
              text = {child}
              subname={child}
              navigate={"Chat"}
            />
					);
				})}
		</div>
  )
}

export default ParentMessagesPage