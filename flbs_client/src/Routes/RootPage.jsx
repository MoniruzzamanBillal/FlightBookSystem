import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";

const RootPage = () => {
  return (
    <div className="mainPageCOntainer">
      {/* nav var starts  */}
      <div className="navContainer   ">
        <NavBar />
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
