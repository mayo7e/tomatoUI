import React from "react";
import '../../index.css';

const PageLoader = () => {
  const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

  return (
    <div className="page_loader-img" >
      <img src={loadingImg} alt="Loading..." />
    </div>
  );
};

export default PageLoader
