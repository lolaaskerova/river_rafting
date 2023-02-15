import React from "react";
import { Helmet } from "react-helmet";
import ShopHero from "../components/ShopComponents/ShopHero/ShopHero";
import ShopProducts from "../components/ShopComponents/ShopProducts/ShopProducts";

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop - River Rafting</title>
      </Helmet>
      <ShopHero />
      <ShopProducts />
    </>
  );
};

export default Shop;
