import React from "react";
import { Helmet } from "react-helmet";
import CareersHero from "../components/CareersComponents/CareersHero/CareersHero";
import CareersWhy from "../components/CareersComponents/CareersWhy/CareersWhy";

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers - River Rafting</title>
      </Helmet>
      <CareersHero />
      <CareersWhy />
    </>
  );
};

export default Careers;
