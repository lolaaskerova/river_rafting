import React from "react";
import ShopProducts from "../../ShopComponents/ShopProducts/ShopProducts";
import "./detailProducts.scss";
const DetailProducts = () => {
  return (
    <div className="detail-products">
      <h1>Related products</h1>
      <ShopProducts />
    </div>
  );
};

export default DetailProducts;
