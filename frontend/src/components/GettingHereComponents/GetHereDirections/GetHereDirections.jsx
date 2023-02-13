import React, { useState } from "react";
import "./gethereDirections.scss";
import map from "../../../assets/images/map.png";
import { FaRegCircle } from "react-icons/fa";
const GetHereDirections = () => {
  const [open, setOpen] = useState(0);
  const changeNumber = (x) => {
    if (open === x) {
      setOpen(0);
    } else {
      setOpen(x);
    }
  };
  return (
    <div className="container get-here-directions">
      <div className="title">
        <div className="logo">
          <img src={map} alt="map" />
        </div>
        <h1>DIRECTIONS</h1>
      </div>
      <div className="direction-content">
        <div className="heading">
          <FaRegCircle />
          <span
            onClick={() => {
              changeNumber(1);
            }}
          >
            Step 1
          </span>
        </div>
        <div className="text">
          <p className={open === 1 ? "text-view" : ""}>
            Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur
            est at lobortis. Fusce dapibus, tellus ac cursus commodo.
          </p>
        </div>
      </div>
      <div className="direction-content">
        <div className="heading">
          <FaRegCircle />
          <span
            onClick={() => {
              changeNumber(2);
            }}
          >
            Step 2
          </span>
        </div>
        <div className="text">
          <p className={open === 2 ? "text-view" : ""}>
            Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur
            est at lobortis. Fusce dapibus, tellus ac cursus commodo.
          </p>
        </div>
      </div>
      <div className="direction-content">
        <div className="heading">
          <FaRegCircle />
          <span
            onClick={() => {
              changeNumber(3);
            }}
          >
            Step 3
          </span>
        </div>
        <div className="text">
          <p className={open === 3 ? "text-view" : ""}>
            Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur
            est at lobortis. Fusce dapibus, tellus ac cursus commodo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetHereDirections;
