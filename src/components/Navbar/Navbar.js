import React, { useEffect } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg";
import { LoginContext } from "../Context/LoginContext.js";
import "./Navbar.css";
import "./NavbarResponsive.css";

function Navbar() {
  const { isLogged, userData, loginAuth } = useContext(LoginContext);

  // useEffect(() => {
  //   loginAuth();
  // }, [isLogged]);

  return (
    <nav class="navbar navbar-expand-lg bg-light navbarMainContainer">
      <div class="container-fluid">
        <NavLink to="/" className="logoContainer">
          <img src={Logo} alt="" />
        </NavLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 linksContainer">
            <li class="nav-item">
              <NavLink to="/" className="animLink">
                Inicio
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/" className="animLink">
                ¿Quiénes somos?
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/" className="animLink">
                Preguntas frecuentes
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/" className="animLink">
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="initSessionContainer">
        {isLogged === true ? (
          <NavLink to="/login" className="sessionIndicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            {userData}
          </NavLink>
        ) : (
          <>
            <NavLink to="/login" className="initSessionBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-circle sessionIcon"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              Iniciar sesión
            </NavLink>
            <NavLink to="/crear-cuenta" className="createUserBtn">
              <div>
                <p>Crear</p>
                <p>cuenta</p>
              </div>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
