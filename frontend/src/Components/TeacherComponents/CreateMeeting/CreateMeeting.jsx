import ModalComponent from "../../Base/Modal/modal";
import "./style.css";


const CreateMeeting = ({showModal , toggleModal}) => {

    return (
        <ModalComponent showModal={showModal} onRequestClose={toggleModal}>
            <div className="create-meeting__form">
                <h1>Create Meeting</h1>
                <div className="create-meeting__input">
                   <label htmlFor="DateTime">Date and Time</label>
                   <input type="datetime-local" name="DateTime" id="DateTime" />
                </div>
                <div className="create-meeting__input">
                   <label htmlFor="guest">Guest</label>
                   <input type="text" name="guest" id="guest" placeholder="Enter email address of your guest" />
                </div>
                <div className="create-meeting__buttons">
                  <button className="cancel-button" onClick={toggleModal}>Cancel</button>
                  <button className="confirm-button">Confirm</button>
                </div>
            </div>
        </ModalComponent>
    )


};

export default CreateMeeting;
