import React from "react";
import { Helmet } from "react-helmet";
import Location from "../components/Location/Location";
import OurTours from "../components/OurTours/OurTours";
import ToursHeroSection from "../components/ToursComponents/ToursHeroSection/ToursHeroSection";
import ToursIncluded from "../components/ToursComponents/ToursIncluded/ToursIncluded";
import ToursReasons from "../components/ToursComponents/ToursReasons/ToursReasons";
import ToursView from "../components/ToursComponents/ToursViewSection/ToursView";

const Tours = () => {
  return (
    <>
      <Helmet>
        <title>Tours - River Rafting</title>
      </Helmet>
      <ToursHeroSection />
      <ToursReasons />
      <OurTours title="OUR TOURS" />
      <ToursIncluded />
      <ToursView />
      <Location />
    </>
  );
};

export default Tours;
