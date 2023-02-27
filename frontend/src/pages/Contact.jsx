import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ContactUs from "../components/ContactUs/ContactUs";
import Location from "../components/Location/Location";
const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);
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
