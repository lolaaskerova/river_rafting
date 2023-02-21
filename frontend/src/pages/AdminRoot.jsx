import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import GoToTop from "../components/GoToTop/GoToTop";

const AdminRoot = () => {
  return (
    <>
      <GoToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminRoot;
