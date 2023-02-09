import React from "react";
import "./homeCompass.scss";
import compass from "../../../assets/images/compass.png";
import compassTour from "../../../assets/images/compassTour.jpg";
const HomeCompass = () => {
  return (
    <div className="all-tours-field">
      <div className="compass all-tours-text-field">
        <div className="all-tours-text-part">
          <div className="all-tours-text-icon">
            <img src={compass} alt="compass" />
          </div>
          <div className="all-tours-text">
            <h1>RAFT THE CHILKO</h1>
            <p>
              Paddle the longest, continuous stretch of commercially-navigable
              Class IV whitewater in North America. Maecenas sed diam eget risus
              varius blandit sit amet non magna.
            </p>
            <a href="">View All Tours</a>
          </div>
        </div>
      </div>
      <div className="all-tours-img">
        <img src={compassTour} alt="compass-tour" />
      </div>
    </div>
  );
};

export default HomeCompass;
