import React from "react";
import "./homeMap.scss";
import map from "../../../assets/images/map.png";
import homeMap from "../../../assets/images/homeMap.jpg";
const HomeMap = () => {
  return (
    <div className="reverse-tours-field all-tours-field">
      <div className="all-tours-img">
        <img src={homeMap} alt="map" />
      </div>
      <div className="map all-tours-text-field">
        <div className="all-tours-text-part">
          <div className="all-tours-text-icon">
            <img src={map} alt="map" />
          </div>
          <div className="all-tours-text">
            <h1>MAKE YOUR OWN ADVENTURE</h1>
            <p>
              Camp, hike, fish, explore creeks & waterfalls in the pristine
              Canadian wilderness Maecenas sed diam eget lorem risus varius
              blandit sit amet non magna dolor.
            </p>
            <a href="">View All Tours</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMap;
