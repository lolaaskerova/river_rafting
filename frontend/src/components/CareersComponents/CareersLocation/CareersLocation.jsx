import React from "react";
import "./careersLocation.scss";
import Location from "../../../components/Location/Location";

const CareersLocation = () => {
  return (
    <div className="careers-location-field">
      <div className="container">
        <div className="careers-location-content">
          <div className="careers-location-title">
            <h2>OUR LOCATION</h2>
            <p>
              Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo
              quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </p>
          </div>
          <div className="careers-location">
            <Location height="430px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersLocation;
