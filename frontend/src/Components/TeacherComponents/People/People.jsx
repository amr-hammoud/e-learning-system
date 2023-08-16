import { useState, useEffect } from "react";
import { sendRequest } from "../../../config/request";
import './style.css'

function PeopleTab({activeCourse}) {

	const [people, setPeople] = useState([]);

	

	useEffect(() => {
		const getPeople = async () => {
			try {
				const response = await sendRequest({route: `teacher/course/${activeCourse}/students`})
			if (response.status === 'success') {
				setPeople(response.data);
				console.log(response.data);
			}
			} catch (error) {
				console.log(error);
			}
		}
		getPeople();
	}, []);


	return (
			<div className="people-container">
                <h1>Students</h1>
				{people?.map((people) => (
					<div className="people-item" key={people.id}>
						<div className="person-name">
                            {people.full_name}
                        </div>
                        <div className="person-chat">
                            <button>Chat with Student</button>
                            <button>Chat with Parent: {people.parents[0].full_name}</button>
                        </div>
					</div>
				))}
			</div>
	);
}

export default PeopleTab;
