import "./style.css";

const MeetingItem = ({ meeting }) => {
    const { name, date_time, link } = meeting;

    return (
        <div className="meeting-item">
            <div className="meeting-item__name">{name}</div>
            <div className="meeting-item__date">{date_time}</div>
            <div className="meeting-item__link"><a href={link}>Join Meeting</a></div>
        </div>
    );
};

export default MeetingItem;