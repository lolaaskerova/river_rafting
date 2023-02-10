import React from "react";
import { Helmet } from "react-helmet";
import NotFoundPage from "../components/NotFoundComponents/NotFoundPage";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found - River Rafting</title>
      </Helmet>
      <NotFoundPage />
    </>
  );
};

export default NotFound;
