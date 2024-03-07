import React from "react";

import { UseAuth } from "../Context/AuthContext";
import { UseStateContext } from "../Context/StateContext";
import Banner from "../Components/Home/Banner";

const Home = () => {
  const { test, user } = UseAuth();
  const { testState } = UseStateContext();

  return (
    <div className="homeContainer bg-lime-400  ">
      {/* banner starts  */}

      <div className="bannerContainer">
        <Banner />
      </div>

      {/* banner ends  */}

      {/*  */}
    </div>
  );
};

export default Home;
