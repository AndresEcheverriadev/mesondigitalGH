import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext.js";

function UserLinks({ activelink }) {
  const { loginOut } = useContext(LoginContext);

  return (
    <div className="userLinksWrapper">
      <NavLink
        className="userLink"
        id={activelink === "inicio" ? "activeLink" : ""}
        to="/perfil"
      >
        Inicio
      </NavLink>
      <NavLink
        className="userLink"
        id={activelink === "cuenta" ? "activeLink" : ""}
        to="/perfil-cuenta"
      >
        Mi cuenta
      </NavLink>
      <NavLink
        className="userLink"
        id={activelink === "tramites" ? "activeLink" : ""}
        to="/perfil-tramites"
      >
        Mis trámites
      </NavLink>
      <NavLink
        className="userLink"
        id={activelink === "documentos" ? "activeLink" : ""}
        to="/perfil-documentos"
      >
        Mis documentos
      </NavLink>

      <button className="userLink btnLogout" id="btnLogout" onClick={loginOut}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default UserLinks;
