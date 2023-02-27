import React, { useEffect } from "react";
import DetailContent from "../components/DetailComponents/DetailContent/DetailContent";
import DetailProducts from "../components/DetailComponents/DetailProducts/DetailProducts";

const Detail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);
  return (
    <>
      <DetailContent />
      <DetailProducts />
    </>
  );
};

export default Detail;
