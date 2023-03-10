import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import CareersHero from "../components/CareersComponents/CareersHero/CareersHero";
import CareersWhy from "../components/CareersComponents/CareersWhy/CareersWhy";
import CareersPerks from "../components/CareersComponents/CareersPerks/CareersPerks";
import CareersFeedBack from "../components/CareersComponents/CareersFeedBack/CareersFeedBack";
import CareersWithUs from "../components/CareersComponents/CareersWithUs/CareersWithUs";
import CareersLocation from "../components/CareersComponents/CareersLocation/CareersLocation";
import CareersLinkField from "../components/CareersComponents/CareersLinkField/CareersLinkField";

const Careers = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);
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
      <CareersLocation />
      <CareersLinkField />
    </>
  );
};

export default Careers;
