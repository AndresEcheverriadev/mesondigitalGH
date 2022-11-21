import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import UserLinks from "./UserLinks.js";
import UserPageId from "./UserPageId";
import { LoginContext } from "../Context/LoginContext.js";
import "./UserPage.css";

function UserPageDocumentos() {
  const { userData, loginAuth, isLogged } = useContext(LoginContext);

  useEffect(() => {
    loginAuth();
  }, [userData]);
  return (
    <div className="userPageMainWrapper">
      <header className="userPageHeaderContainer">
        <Navbar />
      </header>
      {isLogged === true ? (
        <div className="userPageMain">
          <UserPageId user={userData} />
          <div className="userMenu">
            <UserLinks activelink="documentos" />
          </div>
        </div>
      ) : (
        <Navigate to="/" replace />
      )}
    </div>
  );
}

export default UserPageDocumentos;
