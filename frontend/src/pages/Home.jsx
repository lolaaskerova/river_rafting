import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";
import HomeAbout from "../components/HomeComponents/HomeAbout/HomeAbout";
import HomeAllTours from "../components/HomeComponents/HomeAllTours/HomeAllTours";
import Chilko from "../components/HomeComponents/HomeChilko/Chilko";
import HomeFeedBack from "../components/HomeComponents/HomeFeedBack/HomeFeedBack";
import HomeLocation from "../components/HomeComponents/HomeLocation/HomeLocation";
import HomePackages from "../components/HomeComponents/HomePackages/HomePackages";
import HomeTourLink from "../components/HomeComponents/HomeTourLink/HomeTourLink";
import OurTours from "../components/OurTours/OurTours";
const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Home - River Rafting</title>
      </Helmet>
      <HeroSection />
      <HomeAbout />
      <HomeAllTours />
      <OurTours title="VIEW OUR TOURS" />
      <HomeTourLink />
      <Chilko />
      <HomeFeedBack />
      <HomePackages />
      <HomeLocation />
    </>
  );
};

export default Home;
