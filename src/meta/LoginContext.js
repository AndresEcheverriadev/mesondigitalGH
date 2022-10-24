import React from "react";
import  {createContext, useState } from "react";

export const LoginContext = createContext([]);

function LoginContextProvider({ children }) {

  const [userData, setUserData] = useState('');
  const [isLogged, SetIsLogged] = useState(false);



  const handlerUserLogged = () => {
    SetIsLogged(true);
    setUserData('user1@correo.com');
    alert(userData + isLogged);
    window.location.href = "/"
  }

  // function handlerUserLogged() {
  //   userData = 'user1@correo.com';
  //   isLogged = true;
  //   SetIsLogged(true);
  //   setUserData('user1@correo.com');
  //   alert(userData + isLogged)
  // }



  return (
    <LoginContext.Provider value={{ userData, isLogged, setUserData, SetIsLogged,handlerUserLogged }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
 