import React from "react";
import "./aboutUsMission.scss";
import parking from "../../../assets/images/parking.png";
const AboutUsMission = () => {
  return (
    <div className="about-us-mission ">
      <div className="logo">
        <img src={parking} alt="logo" />
      </div>
      <div className="mission-title">
        <h1>OUR MISSION</h1>
      </div>
      <div className="mission-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          vestibulum fermentum fermentum. In nulla sem, gravida a feugiat in,
          maximus id orci. Donec nec sagittis ipsum, sit amet venenatis orci.
          Donec bibendum pulvinar dapibus. Duis ac dui accumsan, finibus erat
          sagittis, mollis nulla. Cras ac interdum lacus. Morbi at ante aliquet,
          faucibus purus quis, pretium justo. Aenean orci tellus, volutpat vitae
          lacinia lobortis, dignissim sit amet ex.
        </p>
      </div>
    </div>
  );
};

export default AboutUsMission;
