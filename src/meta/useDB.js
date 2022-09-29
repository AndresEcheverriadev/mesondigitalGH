import users from "./users.js";

const useDB = () => {
  const checkUser = async (loginData) => {
    const errorNoFound = false;
    try {
      const { emailData } = loginData;
      const found = users.find((email) => email.correo === emailData);
      if (found) {
        alert(found);
        return;
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
