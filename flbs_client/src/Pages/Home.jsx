import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useStateContext } from "../Context/StateContext";

const Home = () => {
  const { test } = useAuth();
  const { testState } = useStateContext();

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
