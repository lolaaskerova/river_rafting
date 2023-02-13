import React from "react";
import { Helmet } from "react-helmet";
import FAQEquipment from "../components/FAQComponents/FAQEquipment/FAQEquipment";
import FAQHero from "../components/FAQComponents/FAQHero/FAQHero";
import FAQInfo from "../components/FAQComponents/FAQInfo/FAQInfo";
import FAQInputs from "../components/FAQComponents/FAQInputs/FAQInputs";
import FAQPreparation from "../components/FAQComponents/FAQPreaparation/FAQPreparation";
import FAQSafety from "../components/FAQComponents/FAQSafety/FAQSafety";
import FAQStory from "../components/FAQComponents/FAQStory/FAQStory";
import FAQSwiper from "../components/FAQComponents/FAQSwiper/FAQSwiper";
const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - River Rafting</title>
      </Helmet>
      <FAQHero />
      <FAQInfo />
      <FAQSafety />
      <FAQSwiper />
      <FAQPreparation />
      <FAQStory />
      <FAQEquipment />
      <FAQInputs />
    </>
  );
};

export default FAQ;
