import { redirect } from "react-router-dom";
import users from "./users.js";

const useDB = () => {
  const checkUser = async (loginData) => {
    const errorNoFound = false;
    try {
      const { emailData, passwordData } = loginData;
      const found = users.find((user) => user.correo === emailData);
      if (found) {
        alert(found);
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
