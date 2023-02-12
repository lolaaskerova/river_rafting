import React from "react";
import "./packageInfo.scss";
import bag from "../../../assets/images/bag.png";
import card from "../../../assets/images/card.png";
import bigbag from "../../../assets/images/bigbag.png";
const PackageInfo = () => {
  return (
    <div className="package-info container">
      <div className="package-info-field">
        <div className="package-info-content">
          <div className="icon">
            <img src={bigbag} alt="package-info-content" />
          </div>
          <div className="package-info-content-titles">
            <h4>Packages</h4>
            <p>All inclusive bundles and packages</p>
          </div>
        </div>
        <div className="package-info-content">
          <div className="icon">
            <img src={card} alt="package-info-content" />
          </div>
          <div className="package-info-content-titles">
            <h4>Specials</h4>
            <p>Great deals on amazing tours</p>
          </div>
        </div>
        <div className="package-info-content">
          <div className="icon">
            <img src={bag} alt="package-info-content" />
          </div>
          <div className="package-info-content-titles">
            <h4>Retreats</h4>
            <p>Large groups and special events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageInfo;
