import React from "react";
import "./HomeAllTours.scss";
import HomeCompass from "../HomeCompass/HomeCompass";
import HomeMap from "../HomeMap/HomeMap";
import HomeKayak from "../HomeKayak/HomeKayak";

const HomeAllTours = () => {
  return (
    <div className="home-all-tours">
      <HomeCompass />
      <HomeMap />
      <HomeKayak />
    </div>
  );
};

export default HomeAllTours;
