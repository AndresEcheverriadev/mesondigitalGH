import users from "./users.js";
import { LoginContext } from "./LoginContext.js";
import { useContext } from "react";

const useDB = () => {
  const { setUserData, SetIsLogged } = useContext(LoginContext);

  const checkUser = async (Data) => {
    const errorNoFound = false;
    try {
      const { emailData, passwordData } = Data;
      const found = users.find((user) => user.correo === emailData);
      if (found) {
        setUserData(found.correo);
        SetIsLogged(true);
        return (window.location.href = "/");
      } else {
        // alert("NO");
        return (errorNoFound = true);
      }
    } catch (error) {}
  };

  return {
    checkUser,
  };
};

export default useDB;
