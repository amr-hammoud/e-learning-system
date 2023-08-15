import ModalComponent from "../../Base/Modal/modal";
import "./style.css";


const CreateSession = ({showModal , toggleModal}) => {

    return (
        <ModalComponent showModal={showModal} onRequestClose={toggleModal}>
            <div className="create-session__form">
                <h1>Create Session</h1>
                <div className="create-session__input">
                   <label htmlFor="DateTime">Date and Time</label>
                   <input type="datetime-local" name="DateTime" id="DateTime" />
                </div>
                <div className="create-session__input">
                     <label htmlFor="virtual">In person?</label>
                        <input type="checkbox" name="virtual" id="virtual" />
                </div>
                <div className="create-session__buttons">
                  <button className="cancel-button" onClick={toggleModal}>Cancel</button>
                  <button className="confirm-button">Confirm</button>
                </div>
            </div>
        </ModalComponent>
    )


};

export default CreateSession;
