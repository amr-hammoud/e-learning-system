import React from "react";
import './style.css';
import Button from "../../Base/Button/index.jsx";

const  CourseCardDetails=()=> {
	return (


    <div class="flex column course-card-details primary-bg rounded ">
        <div className="course-datails-info flex column">
            <div class="course-details-title flex column roundedSmall">
                <h2 className="white-color">
                COURSE TITLE
                </h2>
                <div class="course-details-subject">
                <p className="white-color">Course subject</p>
                </div>
            </div>
           
            <div className="course-details-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean finibus a tortor nec ullamcorper. 
            Phasellus vel nisi ut risus aliquet bibendum.
             Maecenas ac arcu vestibulum, vestibulum tortor in, pretium lacus. 
             Pellentesque a finibus elit.
             Vivamus at massa quis nisl ornare scelerisque. 
            </div>
            <div className="spacer-30"></div>
            <div className="spacer-30"></div>
            <div className="course-details flex row">
                <div className="nb-ass">
                    15 Assignments
                </div>
                <div className="nb-quiz">
                    5 Quizzes
                </div>
                <div className="nb-session">
                    32 Sessions
                </div>
            </div>
            <div className="spacer-30"></div>
            <div className="course-enroll flex center">
                <Button 
                 color={"blue-bg"}
                 textColor={"white-color"}
                 text={"Enroll"}
                />
            </div>
        </div>
    </div>
    );
}
export default CourseCardDetails;