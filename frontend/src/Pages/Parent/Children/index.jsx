import React from 'react'
import './style.css'
import Sidebar from "../../../Components/Common/Sidebar";
import ChildCard from "./components/ChildCard";
const ParentChildrenPage = () => {
  const children = ["Youssef","Houssein"];

  return (
    <div className="page flex">
			<Sidebar items = {["Children","Messages", "Conferences"]} selected={"Children"} />
      
			{children?.map((child) => {
					return (
						<ChildCard 
              backgroundColor={Math.floor(Math.random() * (4 - 1 + 1)) + 1}
              text = {child}
              navigate={"ChildrenProgress"}
            />
					);
				})}
      
		</div>
  )
}

export default ParentChildrenPage