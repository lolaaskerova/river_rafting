import React from "react";
import "./packagesSchool.scss";
import school from "../../../../assets/images/school.jpg";
import { Link } from "react-router-dom";
const PackagesSchool = () => {
  return (
    <div className="reverse-tours-field all-tours-field">
      <div className="all-tours-img">
        <img src={school} alt="school" />
      </div>
      <div className="school all-tours-text-field">
        <div className="all-tours-text-part">
          <div className="all-tours-text">
            <h1>School Groups</h1>
            <p>
              Come and join the thrill and excitement of white water rafting
              with the adventure rafting team!
            </p>
            <Link to="/tours">View All Tours</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesSchool;
