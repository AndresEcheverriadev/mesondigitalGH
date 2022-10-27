import React from "react";
import { NavLink } from "react-router-dom";

function UserLinks({ activelink }) {
  return (
    <>
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
    </>
  );
}

export default UserLinks;
