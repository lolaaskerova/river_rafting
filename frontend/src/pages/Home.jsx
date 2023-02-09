import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";
import HomeAbout from "../components/HomeComponents/HomeAbout/HomeAbout";
import HomeAllTours from "../components/HomeComponents/HomeAllTours/HomeAllTours";
import Chilko from "../components/HomeComponents/HomeChilko/Chilko";
import HomeFeedBack from "../components/HomeComponents/HomeFeedBack/HomeFeedBack";
import HomeLocation from "../components/HomeComponents/HomeLocation/HomeLocation";
import HomePackages from "../components/HomeComponents/HomePackages/HomePackages";
import HomeTour from "../components/HomeComponents/HomeTours/HomeTour";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeroSection />
      <HomeAbout />
      <HomeAllTours />
      <HomeTour />
      <Chilko />
      <HomeFeedBack />
      <HomePackages />
      <HomeLocation />
    </>
  );
};

export default Home;
