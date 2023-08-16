import './style.css'
import CreateMaterial from '../CreateMaterial/CreateMaterial';
import  MaterialItem  from '../MaterialItem/MaterialItem';
import { sendRequest } from '../../../config/request';
import { useState, useEffect } from 'react';


const Stream = ({activeCourse}) => {
    const toggleModal = () => {
		setShowModal(!showModal);
	};

    useEffect(() => {
        if (activeCourse) {
            const getMaterials = async () => {
                try {
                    const response = await sendRequest( {route:`/teacher/course/materials/${activeCourse}`});
                    if (response.status === 'success') {
                        setMaterials(response.materials);
                    }
                } catch (error) {
                    console.log(error);
                }
            } 
            getMaterials();
        }

    }, []);

    const [showModal, setShowModal] = useState(false);
    const [materials, setMaterials] = useState([]);

    return (
        <div className="teacher-stream">
            <h1>Stream</h1>
            <button onClick={toggleModal} className="create-material">Create Material</button>
				<CreateMaterial showModal={showModal} toggleModal={toggleModal} activeCourse={activeCourse}/>
				<div className="meetings-container">
				     {materials?.map((material) => (
					    <MaterialItem
						   key={material.id}
						   material={material}
					    />
				    ))}
				</div>
        </div>
    )

};

export default Stream;