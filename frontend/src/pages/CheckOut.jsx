import React from "react";
import { Helmet } from "react-helmet";
import CheckOutHero from "../components/CheckOutComponents/CheckOutHero/CheckOutHero";

const CheckOut = () => {
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
