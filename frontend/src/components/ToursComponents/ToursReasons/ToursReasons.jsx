import React from "react";
import "./toursReasons.scss";
import map from "../../../assets/images/map.png";
import safety from "../../../assets/images/safety.png";
import like from "../../../assets/images/like.png";
import InfoContent from "../../InfoContent/InfoContent";
const ToursReasons = () => {
  return (
    <div className="reasons container">
      <div className="tours-reason-title">
        <h1>WHY RAFT WITH US</h1>
        <p>
          For over 55 years, we have gained more experience organizing rafting
          trips down the Chilko than other local rafting company.
        </p>
      </div>
      <div className="tours-reasons">
        <InfoContent
          img={safety}
          title={"Safety First"}
          text={
            " We are fully committed to your safety both on and off the river."
          }
        />
        <InfoContent
          img={map}
          title={"World's Best Guides"}
          text={
            " Our guides are true whitewater professionals with Class 5 certifications."
          }
        />
        <InfoContent
          img={like}
          title={"Experience of a Lifetime"}
          text={
            " We provide an adventure like nothing you've ever experienced before."
          }
        />
      </div>
    </div>
  );
};

export default ToursReasons;
