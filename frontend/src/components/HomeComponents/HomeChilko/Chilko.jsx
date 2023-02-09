import React from "react";
import "./chilko.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
const Chilko = () => {
  return (
    <div className="chilko">
      <div className="chilko-inner container">
        <div className="chilko-card">
          <h3>CHILKO TOUR</h3>
          <p>
            Come and join the thrill and excitement of white water rafting with
            the adventure rafting team! Sed fringilla, lorem a tristique
            porttitor, massa lacus consequat ante. Sed fringilla, lorem a
            tristique porttitor, massa lacus consequat ante.
          </p>
          <a href="">
            VIEW ALL TOURS <AiOutlineArrowRight />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Chilko;
