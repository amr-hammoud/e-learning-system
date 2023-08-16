import ModalComponent from "../../Base/Modal/modal";
import { sendRequest } from "../../../config/request";
import { useState } from "react";
import "./style.css";


const CreateMaterial = ({showModal , toggleModal, activeCourse}) => {
    const [materialData, setMaterialData] = useState({
        course_id: activeCourse,
        title: "",
        description: "",
        attachment: null,
    });

    const handleChange = (e) => {
        if (e.target.name === "attachment") {
            setMaterialData({ ...materialData, attachment: e.target.files[0] });
        } else {
            setMaterialData({ ...materialData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        
        const data = new FormData();
        data.append("course_id", materialData.course_id);
        data.append("title", materialData.title);
        data.append("description", materialData.description);
        data.append("attachment", materialData.attachment);

        e.preventDefault();
        try {
           const response = await sendRequest({ method: "POST", route: "teacher/course/material/create", body: data });
           if (response.status === 'success') {
            console.log(response);
               toggleModal();
           } 
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <ModalComponent showModal={showModal} onRequestClose={toggleModal}>
            <div className="create-material__form">
                <h1>Create material</h1>
                <div className="create-material__input">
                   <label htmlFor="title">Title</label>
                   <input type="text" name="title" id="title" onChange={handleChange} placeholder="Enter title"/>
                </div>
                <div className="create-material__input">
                   <label htmlFor="description">Description</label>
                   <input type="text" name="description" id="description" placeholder="Enter description" onChange={handleChange} />
                </div>
                <div className="create-material__input">
                   <label htmlFor="attachment">Attachment</label>
                   <input type="file" name="attachment" id="attachment" onChange={handleChange} />
                </div>
                <div className="create-material__buttons">
                  <button className="cancel-button" onClick={toggleModal}>Cancel</button>
                  <button type="submit" className="confirm-button" onClick={handleSubmit}>Confirm</button>
                </div>
            </div>
        </ModalComponent>
    )


};

export default CreateMaterial;
