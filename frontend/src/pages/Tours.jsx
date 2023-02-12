import React from "react";
import { Helmet } from "react-helmet";
import Location from "../components/Location/Location";
import ToursHeroSection from "../components/ToursComponents/ToursHeroSection/ToursHeroSection";
import ToursIncluded from "../components/ToursComponents/ToursIncluded/ToursIncluded";
import ToursReasons from "../components/ToursComponents/ToursReasons/ToursReasons";
import ToursTourSection from "../components/ToursComponents/ToursTourSection/ToursTourSection";
import ToursView from "../components/ToursComponents/ToursViewSection/ToursView";

const Tours = () => {
  return (
    <>
      <Helmet>
        <title>Tours - River Rafting</title>
      </Helmet>
      <ToursHeroSection />
      <ToursReasons />
      <ToursTourSection />
      <ToursIncluded />
      <ToursView />
      <Location />
    </>
  );
};

export default Tours;
