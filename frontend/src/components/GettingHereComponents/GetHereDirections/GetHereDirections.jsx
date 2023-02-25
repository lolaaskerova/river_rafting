import React, { useState } from "react";
import "./gethereDirections.scss";
import map from "../../../assets/images/map.png";
import { FaRegCircle } from "react-icons/fa";
import GettingHereDirectionItem from "../GettingHereDirectionItem/GettingHereDirectionItem";
const GetHereDirections = () => {
  return (
    <div className="container get-here-directions">
      <div className="title">
        <div className="logo">
          <img src={map} alt="map" />
        </div>
        <h1>DIRECTIONS</h1>
      </div>
      <div className="getting-here-items">
        <GettingHereDirectionItem
          title={"Step 1"}
          content={
            "Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo."
          }
        />
        <GettingHereDirectionItem
          title={"Step 2"}
          content={
            "Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo."
          }
        />
        <GettingHereDirectionItem
          title={"Step 3"}
          content={
            "Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo."
          }
        />
      </div>
    </div>
  );
};

export default GetHereDirections;
