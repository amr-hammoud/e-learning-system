import "./style.css"
import CardImage from "../../../assets/course-card.jpg";

const CourseCard = ({ course }) => {
    const { id, name, subject, description } = course;
    
    return (
        <div className="course-card" id={id}>
            <div className="course-card-img"><img src={CardImage} alt="course card" /></div>
            <div className="course-card-info">
                <h3>{name}</h3>
                <h4>{subject}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
};

export default CourseCard;