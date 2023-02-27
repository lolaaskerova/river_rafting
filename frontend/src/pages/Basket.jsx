import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import BasketHero from "../components/BasketComponents/BasketHero/BasketHero";
import BasketMain from "../components/BasketComponents/BasketMain/BasketMain";
const Basket = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Basket - River Rafting</title>
      </Helmet>
      <BasketHero />
      <BasketMain />
    </>
  );
};

export default Basket;
