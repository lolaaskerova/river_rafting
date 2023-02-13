import React from "react";
import "./gethereExperience.scss";
import experience from "../../../assets/images/experience.png";
const GetHerExperience = () => {
  return (
    <div className="get-here-experience container">
      <div className="icon">
        <img src={experience} alt="experience" />
      </div>
      <div className="title">
        <h1>EXPERIENCE THE JOURNEY</h1>
      </div>
      <div className="text">
        <p>
          Many visitors comment on the amazing beauty of their travels to and
          from the river. It’s truly an amazing experience. We encourage you to
          plan and test your time getting to the river and also heading back
          after your experience. Make it a memorable journey.
        </p>
      </div>
    </div>
  );
};

export default GetHerExperience;
