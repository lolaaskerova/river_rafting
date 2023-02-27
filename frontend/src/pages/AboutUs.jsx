import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AboutUsAdventureTeam from "../components/AboutUsComponents/AboutUsAdventureTeam/AboutUsAdventureTeam";
import AboutUsCareer from "../components/AboutUsComponents/AboutUsCareer/AboutUsCareer";
import AboutUsHero from "../components/AboutUsComponents/AboutUsHero/AboutUsHero";
import AboutUsMission from "../components/AboutUsComponents/AboutUsMission/AboutUsMission";
import AboutUsSlider from "../components/AboutUsComponents/AboutUsSlider/AboutUsSlider";
import AboutUsStory from "../components/AboutUsComponents/AboutUsStory/AboutUsStory";
import AboutUsGetInTouch from "../components/AboutUsComponents/AboutUsGetInTouch/AboutUsGetInTouch";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>About Us - River Rafting</title>
      </Helmet>
      <AboutUsHero />
      <AboutUsStory />
      <AboutUsSlider />
      <AboutUsMission />
      <AboutUsAdventureTeam />
      <AboutUsCareer />
      <AboutUsGetInTouch />
    </>
  );
};

export default AboutUs;
