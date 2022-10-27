import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import UserLinks from "./UserLinks.js";
import UserPageId from "./UserPageId";
import "./UserPage.css";

function UserPageDocumentos({ user }) {
  return (
    <div className="userPageMainWrapper">
      <header className="userPageHeaderContainer">
        <Navbar />
      </header>
      <div className="userPageMain">
        <UserPageId user={user} />
        <div className="userMenu">
          <UserLinks activelink="documentos" />
        </div>
      </div>
    </div>
  );
}

export default UserPageDocumentos;
