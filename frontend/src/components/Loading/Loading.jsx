import React from "react";
import "./loading.scss";
import DotLoader from "react-spinners/DotLoader";
const Loading = ({ loading }) => {
  return (
    <div className="loading">
      <DotLoader
        id="loading"
        color={"#3a3b74"}
        loading={loading}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
