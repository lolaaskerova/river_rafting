import React from "react";
import "./toursReasons.scss";
import map from "../../../assets/images/map.png";
import safety from "../../../assets/images/safety.png";
import like from "../../../assets/images/like.png";
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
        <div className="reason">
          <div className="icon">
            <img src={safety} alt="reason" />
          </div>
          <div className="reason-titles">
            <h4>Safety First</h4>
            <p>
              We are fully committed to your safety both on and off the river.
            </p>
          </div>
        </div>
        <div className="reason">
          <div className="icon">
            <img src={map} alt="reason" />
          </div>
          <div className="reason-titles">
            <h4>World's Best Guides</h4>
            <p>
              Our guides are true whitewater professionals with Class 5
              certifications.
            </p>
          </div>
        </div>
        <div className="reason">
          <div className="icon">
            <img src={like} alt="reason" />
          </div>
          <div className="reason-titles">
            <h4>Experience of a Lifetime</h4>
            <p>
              We provide an adventure like nothing you've ever experienced
              before.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursReasons;
