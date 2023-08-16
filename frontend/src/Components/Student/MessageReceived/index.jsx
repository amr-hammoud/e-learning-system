import "./style.css";
import Message from "../Message";
const MessageReceived=()=>{
	return (
        <div className="receive flex row " >
            <Message />
        </div>
    );
}
export default MessageReceived;