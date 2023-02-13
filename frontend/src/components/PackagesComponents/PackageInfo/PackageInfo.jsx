import React from "react";
import "./packageInfo.scss";
import bag from "../../../assets/images/bag.png";
import card from "../../../assets/images/card.png";
import bigbag from "../../../assets/images/bigbag.png";
import InfoContent from "../../InfoContent/InfoContent";
const PackageInfo = () => {
  return (
    <div className="package-info container">
      <div className="package-info-field">
        <InfoContent
          img={bigbag}
          title={"Packages"}
          text={"All inclusive bundles and packages"}
        />
        <InfoContent
          img={card}
          title={"Specials"}
          text={"Great deals on amazing tours"}
        />
        <InfoContent
          img={bag}
          title={"Retreats"}
          text={"Large groups and special events"}
        />
      </div>
    </div>
  );
};

export default PackageInfo;
