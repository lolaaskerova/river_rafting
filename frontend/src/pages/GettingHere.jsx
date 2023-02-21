import React from "react";
import { Helmet } from "react-helmet";
import GetHereDirections from "../components/GettingHereComponents/GetHereDirections/GetHereDirections";
import GetHerExperience from "../components/GettingHereComponents/GetHereExperience/GetHerExperience";
import GetHereHero from "../components/GettingHereComponents/GetHereHero/GetHereHero";
import GetHereLink from "../components/GettingHereComponents/GetHereLink/GetHereLink";
import GetHereShuttle from "../components/GettingHereComponents/GetHereShuttle/GetHereShuttle";
import GetHereSwiper from "../components/GettingHereComponents/GetHereSwiper/GetHereSwiper";
import Location from "../components/Location/Location";
const GettingHere = () => {
  return (
    <>
      <Helmet>
        <title>Getting Here - River Rafting</title>
      </Helmet>
      <GetHereHero />
      <GetHerExperience />
      <GetHereSwiper />
      <GetHereDirections />
      <GetHereLink />
      <GetHereShuttle />
      <Location height={"500px"} />
    </>
  );
};

export default GettingHere;
