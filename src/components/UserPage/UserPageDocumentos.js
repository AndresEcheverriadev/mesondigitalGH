import React, { useContext } from "react";
import { Navigate, NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import UserLinks from "./UserLinks.js";
import UserPageId from "./UserPageId";
import { LoginContext } from "../Context/LoginContext.js";
import "./UserPage.css";

function UserPageDocumentos({ user }) {
  const { userData } = useContext(LoginContext);
  return (
    <div className="userPageMainWrapper">
      <header className="userPageHeaderContainer">
        <Navbar />
      </header>
      {userData.isLogged === true ? (
        <div className="userPageMain">
          <UserPageId user={user} />
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
