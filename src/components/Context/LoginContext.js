import React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext([]);

function LoginContextProvider({ children }) {
  const [userData, setUserData] = useState({
    isLogged: false,
    userMail: "",
    userNombre: "",
    userCorreo: "",
    userMaterno: "",
    userPaterno: "",
    userRut: "",
    userTipo: "",
  });

  const navigate = useNavigate();

  const loginAuth = () => {
    if (userData.userName === "" || userData.userMail === "") {
      setUserData((prev) => ({ ...prev, isLogged: false }));
    } else {
      setUserData((prev) => ({ ...prev, isLogged: true }));
    }
  };

  const loginOut = () => {
    setUserData({ userMail: "" }, { userNombre: "" });
    navigate("/");
  };

  return (
    <LoginContext.Provider
      value={{
        userData,
        setUserData,
        loginAuth,
        loginOut,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginContextProvider };
