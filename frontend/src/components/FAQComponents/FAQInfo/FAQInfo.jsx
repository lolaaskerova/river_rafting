import React from "react";
import "./faqInfo.scss";
import safety from "../../../assets/images/safety.png";
import map from "../../../assets/images/map.png";
import body from "../../../assets/images/body.png";
import InfoContent from "../../InfoContent/InfoContent";
const FAQInfo = () => {
  return (
    <div className="faq-info container">
      <div className="faq-info-field">
        <InfoContent
          img={safety}
          title={"Safety"}
          text={
            "Shuttle to and from rafting trip. Store your belongings safely. Praesent suscipit aliquam convallis. In quis ultricies neque."
          }
        />
        <InfoContent
          img={map}
          title={"Preparation"}
          text={
            "Shuttle to and from rafting trip. Store your belongings safely. Praesent suscipit aliquam convallis. In quis ultricies neque."
          }
        />
        <InfoContent
          img={body}
          title={"Equipment"}
          text={
            "Shuttle to and from rafting trip. Store your belongings safely. Praesent suscipit aliquam convallis. In quis ultricies neque."
          }
        />
      </div>
    </div>
  );
};

export default FAQInfo;
