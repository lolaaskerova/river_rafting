import React from "react";
import "./ourTours.scss";
import AllTours from "../AllTours/AllTours";
const OurTours = (props) => {
  const { title } = props;
  return (
    <div className="our-tours-part">
      <div className="tours-container">
        <div className="our-tours-content">
          <div className="tours-content-top">
            <div className="our-tours-titles">
              <h2>{title}</h2>
              <p>
                Enjoy a full guided, catered camping with delicious meals. Come
                and join the thrill and excitement of white water rafting with
                the team!
              </p>
            </div>
          </div>
          <div className="tours-content-bottom">
            <div className="our-tours-sorting">
              <span>Sort :</span>
              <button>All</button>
              <button>Advanced</button>
              <button>Multi-Day</button>
              <button>Rapids</button>
            </div>
            <AllTours />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTours;
