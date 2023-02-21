import React from "react";
import { Helmet } from "react-helmet";
import AdminTable from "../components/AdminComponents/AdminTable/AdminTable";

const Admin = () => {
  return (
    <>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <AdminTable />
    </>
  );
};

export default Admin;
