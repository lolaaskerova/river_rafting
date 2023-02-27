import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import GoToTop from "../components/GoToTop/GoToTop";

const AdminRoot = () => {
  return (
    <>
      <GoToTop />
      <Navbar />
      <Outlet />
    </>
  );
};

export default AdminRoot;
