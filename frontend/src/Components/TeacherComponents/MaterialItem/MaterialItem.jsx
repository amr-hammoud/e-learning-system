import "./style.css";

const MaterialItem = ({ material }) => {
    const { title, description, attachment } = material;

    return (
        <div className="material-item">
            <div className="material-item__info">
               <div className="material-item__title">{title}</div>
               <div className="material-item__date">{description}</div>
            </div>
            <div className="material-item__link"><a href={attachment}>Download</a></div>
        </div>
    );
};

export default MaterialItem;