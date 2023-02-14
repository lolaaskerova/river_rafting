import React from "react";
import "./careersPerks.scss";
import calendarIcon from "../../../assets/images/calendarIcon.png";
import CareersPerksItem from "../CareersPerksItem/CareersPerksItem";

const CareersPerks = () => {
  return (
    <div className="careers-perks-field">
      <div className="container">
        <div className="careers-perks-part">
          <div className="careers-perks-content">
            <div className="careers-perk-title">
              <h2>Company Perks</h2>
            </div>
            <div className="careers-perk-rows">
              <div className="careers-perk-items">
                <CareersPerksItem
                  img={calendarIcon}
                  title="Flexible schedule"
                  paragraph="Cras nec consequat neque, nec placerat purus. Maecenas dui turpis, suscipit vel."
                />
                <CareersPerksItem
                  img={calendarIcon}
                  title="Fun atmosphere"
                  paragraph="Maecenas nibh ipsum, viverra faucibus consectetur non, maximus id ante."
                />
              </div>
              <div className="careers-perk-items">
                <CareersPerksItem
                  img={calendarIcon}
                  title="Friendly team"
                  paragraph="Nullam faucibus pretium augue in iaculis. In leo dui, molestie vel congue in, viverra in."
                />
                <CareersPerksItem
                  img={calendarIcon}
                  title="Growth opportunity"
                  paragraph="Duis posuere hendrerit mi et tincidunt. Aliquam est est, rhoncus sit amet massa at, element."
                />
              </div>
              <div className="careers-perk-items">
                <CareersPerksItem
                  img={calendarIcon}
                  title="Free gear"
                  paragraph="Fusce in condimentum dolor. Donec quis pharetra nulla. Nam efficitur tortor sit amet."
                />
                <CareersPerksItem
                  img={calendarIcon}
                  title="Paid holidays"
                  paragraph="A lacinia elit, in malesuada orci. Nam imperdiet risus ut eleifend sodales. Phasellus dolor."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPerks;
