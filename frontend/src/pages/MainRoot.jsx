import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import GoToTop from "../components/GoToTop/GoToTop";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../components/Loading/Loading";

const MainRoot = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <GoToTop />
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default MainRoot;
