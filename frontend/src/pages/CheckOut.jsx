import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import CheckOutHero from "../components/CheckOutComponents/CheckOutHero/CheckOutHero";

const CheckOut = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Check Out - River Rafting</title>
      </Helmet>
      <CheckOutHero />
    </>
  );
};

export default CheckOut;
