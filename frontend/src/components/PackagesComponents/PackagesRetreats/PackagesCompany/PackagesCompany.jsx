import React from "react";
import "./packagesCompany.scss";
import company from "../../../../assets/images/aboutswiper1.jpg";
const PackagesCompany = () => {
  return (
    <div className="all-tours-field">
      <div className="company all-tours-text-field">
        <div className="all-tours-text-part">
          <div className="all-tours-text">
            <h1>Company Retreats</h1>
            <p>
              Come and join the thrill and excitement of white water rafting
              with the adventure rafting team!
            </p>
            <a href="">View All Tours</a>
          </div>
        </div>
      </div>
      <div className="all-tours-img">
        <img src={company} alt="compass-tour" />
      </div>
    </div>
  );
};

export default PackagesCompany;
