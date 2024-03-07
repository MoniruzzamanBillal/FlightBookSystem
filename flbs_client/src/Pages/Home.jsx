import React from "react";

import { UseAuth } from "../Context/AuthContext";
import { UseStateContext } from "../Context/StateContext";

const Home = () => {
  const { test } = UseAuth();
  const { testState } = UseStateContext();

  return (
    <div className="homeContainer bg-lime-400  ">
      <h1>home page </h1>
      <h1>home page </h1>
      <h1>home page </h1>
      <h1>home page </h1>
      <h1>home page </h1>
      <h1>home page </h1>
      <h1>home page </h1>
    </div>
  );
};

export default Home;
