import React from "react";
import { Helmet } from "react-helmet";
import CareersHero from "../components/CareersComponents/CareersHero/CareersHero";
import CareersWhy from "../components/CareersComponents/CareersWhy/CareersWhy";
import CareersPerks from "../components/CareersComponents/CareersPerks/CareersPerks";
import CareersFeedBack from "../components/CareersComponents/CareersFeedBack/CareersFeedBack";
import CareersWithUs from "../components/CareersComponents/CareersWithUs/CareersWithUs";

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers - River Rafting</title>
      </Helmet>
      <CareersHero />
      <CareersWhy />
      <CareersPerks />
      <CareersFeedBack />
      <CareersWithUs />
    </>
  );
};

export default Careers;
