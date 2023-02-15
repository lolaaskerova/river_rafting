import React from "react";
import "./packagesStags.scss";
import stags from "../../../../assets/images/stags.jpg";
import { Link } from "react-router-dom";
const PackagesStags = () => {
  return (
    <div className="all-tours-field">
      <div className="stags all-tours-text-field">
        <div className="all-tours-text-part">
          <div className="all-tours-text">
            <h1>Stags & Stagettes</h1>
            <p>
              Come and join the thrill and excitement of white water rafting
              with the adventure rafting team!
            </p>
            <Link to="/tours">View All Tours</Link>
          </div>
        </div>
      </div>
      <div className="all-tours-img">
        <img src={stags} alt="compass-tour" />
      </div>
    </div>
  );
};

export default PackagesStags;
