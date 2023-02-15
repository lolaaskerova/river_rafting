import React from "react";
import "./toursView.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const ToursView = () => {
  return (
    <>
      <div className="tours-view">
        <div className="tours-view-inner container">
          <div className="tours-view-card">
            <h3>Save 25%</h3>
            <p>
              Come and join the thrill and excitement of white water rafting
              with the adventure rafting team!
            </p>
            <Link to="/tours">
              VIEW TOUR SPECIALS <AiOutlineArrowRight />{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="tour_link">
        <h4>Download our waiver forms here</h4>
        <button>Download Forms</button>
      </div>
    </>
  );
};

export default ToursView;
