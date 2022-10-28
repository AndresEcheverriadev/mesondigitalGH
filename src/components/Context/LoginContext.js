import React from "react";
import { createContext, useState } from "react";

const LoginContext = createContext([]);

function LoginContextProvider({ children }) {
  const [userData, setUserData] = useState("");
  const [isLogged, SetIsLogged] = useState(false);

  const loginAuth = () => {
    if (userData === "") {
      SetIsLogged(false);
    } else {
      SetIsLogged(true);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        userData,
        isLogged,
        setUserData,
        SetIsLogged,
        loginAuth,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginContextProvider };
