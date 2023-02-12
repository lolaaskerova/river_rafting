import React from "react";
import bigbag from "../../../assets/images/bigbag.png";
import AllTours from "../../AllTours/AllTours";
import "./packagesPackages.scss";
const PackagesPackage = () => {
  return (
    <div className="packages-package">
      <div className="packages-package-title">
        <div className="icon">
          <img src={bigbag} alt="bag" />
        </div>
        <div className="package-info-content-titles">
          <h1>PACKAGES</h1>
          <p>Experience more with our multi-day packages</p>
        </div>
      </div>
      <AllTours />
    </div>
  );
};

export default PackagesPackage;
