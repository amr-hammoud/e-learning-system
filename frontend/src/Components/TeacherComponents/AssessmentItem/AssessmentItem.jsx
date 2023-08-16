import "./style.css";

const AssessmentItem = ({ assessment }) => {
    const { title, description, attachment, due_date } = assessment;

    return (
        <div className="assessment-item">
            <div className="assessment-item__info">
               <div className="assessment-item__title">{title}</div>
               <div className="assessment-item__date">{description}</div>
            </div>
            <div className="assessment-item__link">{due_date}<br/><a href={attachment}>Download</a></div>
        </div>
    );
};

export default AssessmentItem;