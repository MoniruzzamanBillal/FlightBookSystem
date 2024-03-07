import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [testState, useTestState] = useState("test state context");

  const authValue = { testState };

  return (
    <StateContext.Provider value={authValue}>{children}</StateContext.Provider>
  );
};

export const UseStateContext = () => {
  return useContext(StateContext);
};
