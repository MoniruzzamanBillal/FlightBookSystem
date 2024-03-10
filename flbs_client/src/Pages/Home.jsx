import React from "react";

import { UseAuth } from "../Context/AuthContext";
import { UseStateContext } from "../Context/StateContext";
import Banner from "../Components/Home/Banner";
import HomeAdd from "../Components/Home/HomeAdd";

const Home = () => {
  const { test, user } = UseAuth();
  const { testState } = UseStateContext();

  return (
    <div className="homeContainer   ">
      {/* banner starts  */}

      <div className="bannerContainer">
        <Banner />
      </div>

      {/* banner ends  */}

      <div className="adContainer">
        <HomeAdd />
      </div>

      {/*  */}
    </div>
  );
};

export default Home;
