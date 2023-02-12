import React from "react";
import Location from "../../Location/Location";
import "./homeLocation.scss";
const HomeLocation = () => {
  return (
    <>
      <Location />
      <div className="tour_link">
        <h4>Like what you see? Book your trip today!</h4>
        <button>View Tours</button>
      </div>
    </>
  );
};

export default HomeLocation;
