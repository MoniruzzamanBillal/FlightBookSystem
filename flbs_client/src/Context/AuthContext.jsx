import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Utils/Firebase.config";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [test, setTest] = useState("test state ");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   register function
  const registerFunction = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   email login function
  const loginFunction = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout function
  const logoutFunction = () => {
    signOut(auth);
  };

  // for changing user effect
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authValue = {
    test,
    user,
    loading,
    registerFunction,
    loginFunction,
    logoutFunction,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export const UseAuth = () => {
  return useContext(AuthContext);
};
