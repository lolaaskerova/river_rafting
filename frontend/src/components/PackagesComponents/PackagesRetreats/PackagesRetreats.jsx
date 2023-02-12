import React from "react";
import "./packagesRetreats.scss";
import bigbag from "../../../assets/images/bag.png";
import PackagesStags from "./PackagesStags/PackagesStags";
import PackagesSchool from "./PackagesSchool/PackagesSchool";
import PackagesCompany from "./PackagesCompany/PackagesCompany";
const PackagesRetreats = () => {
  return (
    <div className="packages-retreats">
      <div className="retreats-titles">
        <div className="logo">
          <img src={bigbag} alt="logo" />
        </div>
        <div className="title">
          <h1>RETREATS & SPECIAL EVENTS</h1>
          <p>
            We specialize in facilitating large groups and special events,
            including stags, stagettes, and company retreats.
          </p>
        </div>
      </div>
      <div className="packages-all-tours">
        <PackagesStags />
        <PackagesSchool />
        <PackagesCompany />
      </div>
    </div>
  );
};

export default PackagesRetreats;
