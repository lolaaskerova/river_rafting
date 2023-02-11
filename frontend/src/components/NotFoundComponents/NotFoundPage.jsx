import React from "react";
import "./notFoundPage.scss";
const NotFoundPage = () => {
  return (
    <div className="not-found-field">
      <div className="container">
        <div className="not-found-title">
          <h1>PAGE NOT FOUND</h1>
        </div>
        <div className="not-found-input-part">
          <p>Sorry, the page you are looking for has not been found.</p>
          <div className="not-found-input">
            <input type="search" placeholder="Search River Rafting" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
