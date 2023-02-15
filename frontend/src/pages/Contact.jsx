import React from "react";
import { Helmet } from "react-helmet";
import ContactUs from "../components/ContactUs/ContactUs";
import Location from "../components/Location/Location";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - River Rafting</title>
      </Helmet>
      <Location height={"500px"} />
      <ContactUs />
    </>
  );
};

export default Contact;
