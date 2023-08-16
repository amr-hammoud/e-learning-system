import './style.css'
import CreateAssessment from '../CreateAssessment/CreateAssessment';
import { sendRequest } from '../../../config/request';
import { useState, useEffect } from 'react';
import AssessmentItem from '../AssessmentItem/AssessmentItem';


const Classwork = ({activeCourse}) => {
    const toggleModal = () => {
		setShowModal(!showModal);
	};

    
    const [showModal, setShowModal] = useState(false);
    const [assessments, setAssessments] = useState([]);
    
    useEffect(() => {
        if (activeCourse) {
            const getAssessments = async () => {
                try {
                    const response = await sendRequest( {route:`/teacher/course/assessments/${activeCourse}`});
                    if (response.status === 'success') {
                        setAssessments(response.assessments);
                    }
                } catch (error) {
                    console.log(error);
                }
            } 
            getAssessments();
        }

    }, []);


    return (
        <div className="teacher-stream">
            <h1>Classwork</h1>
            <button onClick={toggleModal} className="create-material">Create Assessment</button>
				<CreateAssessment showModal={showModal} toggleModal={toggleModal} activeCourse={activeCourse}/>
				<div className="meetings-container">
				     {assessments?.map((assessment) => (
					    <AssessmentItem
						   key={assessment.id}
						   assessment={assessment}
					    />
				    ))}
				</div>
        </div>
    )

};

export default Classwork;