import React from "react";
import { Helmet } from "react-helmet";
import AboutUsHero from "../components/AboutUsComponents/AboutUsHero/AboutUsHero";
const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - River Rafting</title>
      </Helmet>
      <AboutUsHero />
    </>
  );
};

export default AboutUs;
