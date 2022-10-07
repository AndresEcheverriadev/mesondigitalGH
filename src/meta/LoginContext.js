import { React, createContext, useState } from "react";
import useValidator from "./useValidator";
import useDB from "./useDB";

export const LoginContext = createContext([]);

function LoginContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [isLogged, SetIsLogged] = useState(false);

  return (
    <LoginContext.Provider
      value={{ userData, isLogged, setUserData, SetIsLogged }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
