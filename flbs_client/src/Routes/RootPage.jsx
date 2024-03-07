import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar";
import Footer from "../Components/Shared/Footer";

const RootPage = () => {
  return (
    <div className="mainPageCOntainer">
      {/* nav var starts  */}
      <div className="navContainer   ">
        <NavBar />
      </div>
      {/* nav var ends */}

      {/* main body container  */}
      <div className="bodyContainer  m-auto  ">
        <Outlet />
      </div>
      {/* main body container  */}

      {/* footer starts  */}
      <div className="footerContainer  ">
        <Footer />
      </div>
      {/* footer ends  */}
    </div>
  );
};

export default RootPage;
