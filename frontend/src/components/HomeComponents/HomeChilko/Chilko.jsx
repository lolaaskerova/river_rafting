import React from "react";
import "./chilko.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
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
          <Link to="/tours">
            VIEW ALL TOURS <AiOutlineArrowRight />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chilko;
