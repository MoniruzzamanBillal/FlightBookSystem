import React from "react";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div className="mainPageCOntainer">
      {/* nav var starts  */}
      <div className="navContainer bg-red-300  ">
        <h1>navbar</h1>
        <h1>navbar</h1>
        <h1>navbar</h1>
        <h1>navbar</h1>
      </div>
      {/* nav var ends */}

      {/* main body container  */}
      <div className="bodyContainer">
        <Outlet />
      </div>
      {/* main body container  */}

      {/* footer starts  */}
      <div className="footerContainer bg-sky-300 ">
        <h1>footer </h1>
        <h1>footer </h1>
        <h1>footer </h1>
        <h1>footer </h1>
      </div>
      {/* footer ends  */}
    </div>
  );
};

export default RootPage;
