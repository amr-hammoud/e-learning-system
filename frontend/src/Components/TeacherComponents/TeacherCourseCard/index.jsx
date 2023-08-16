import "./style.css"
import CardImage from "../../../assets/course-card.jpg";


const TeacherCourseCard = ({ course, setActiveCourse }) => {
    const { id, name, subject, description } = course;
    
    
    return (
        <div className="teacher-course-card" id={id} onClick={() => setActiveCourse(id)}>
            <div className="course-card__img"><img src={CardImage} alt="course card" /></div>
            <div className="course-card__info">
                <h3>{name}</h3>
                <h4>{subject}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
};

export default TeacherCourseCard;