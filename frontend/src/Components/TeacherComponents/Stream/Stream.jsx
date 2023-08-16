import './style.css'
import CreateMaterial from '../CreateMaterial/CreateMaterial';
import { useState, useEffect } from 'react';


const Stream = ({activeCourse}) => {
    const toggleModal = () => {
		setShowModal(!showModal);
	};



    const [showModal, setShowModal] = useState(false);
    const [materials, setMaterials] = useState([]);

    return (
        <div className="teacher-stream">
            <h1>Stream</h1>
            <button onClick={toggleModal} className="create-material">Create Meeting</button>
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