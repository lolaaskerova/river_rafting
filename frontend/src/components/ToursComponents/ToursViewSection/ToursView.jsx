import React from "react";
import "./toursView.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
const ToursView = () => {
  return (
    <div className="tours-view">
      <div className="tours-view-inner container">
        <div className="tours-view-card">
          <h3>Save 25%</h3>
          <p>
            Come and join the thrill and excitement of white water rafting with
            the adventure rafting team!
          </p>
          <a href="">
            VIEW TOUR SPECIALS <AiOutlineArrowRight />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToursView;
