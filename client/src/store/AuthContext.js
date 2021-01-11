import React, { createContext, useState, useEffect } from "react";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ data: null });

  const setAuthData = (user) => {
    setAuth({ data: user });
  };

  useEffect(() => {
    setAuth({
      data: JSON.parse(window.localStorage.getItem("userData")),
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem("authData", JSON.stringify(auth.data));
  }, [auth.data]);

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
