import React from "react";
import loadingGif from "../images/gif/loading-gear.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h4>hang tight....</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
