import React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext([]);

function LoginContextProvider({ children }) {
  const [isLogged, setisLogged] = useState(false);
  const [userData, setUserData] = useState({
    userMail: "",
    userNombre: "",
    userMaterno: "",
    userPaterno: "",
    userRut: "",
    userPassword: "",
    userTipo: "",
  });

  const navigate = useNavigate();

  const loginAuth = () => {
    if (userData.userName === "" || userData.userMail === "") {
      setisLogged(false);
    } else {
      setisLogged(true);
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
        isLogged,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginContextProvider };
