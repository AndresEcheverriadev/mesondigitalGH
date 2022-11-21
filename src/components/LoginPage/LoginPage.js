import React from "react";
import { NavLink } from "react-router-dom";
import logoLogin from "../../images/logo.svg";
import useValidator from "../../meta/useValidator";
import ErrorTip from "../ErrorTip/ErrorTip";
import "./LoginPage.css";
import "./LoginPageResponsive.css";

function LoginPage() {
  const {
    validateEmail,
    validatePassword,
    loginCheck,
    errorText,
  } = useValidator();

  return (
    <div className="loginPageMainWrapper">
      <div className="viewloginPageWrapper">
        <header className="headerLoginContainer">
          <NavLink to="/" className="loginLogoContainer">
            <img src={logoLogin} alt="" />
          </NavLink>
        </header>
        <form className="userLoginFormContainer">
          <div class="mb-3">
            <label for="userLoginInputEmail" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              class="form-control"
              id="userLoginInputEmail"
              aria-describedby="emailHelp"
              onChange={validateEmail}
            />
            <ErrorTip
              errorText="Escribe una dirección de correo válida"
              name="emailErrorTip"
            />
          </div>
          <div class="mb-3">
            <label for="userLoginInputPassword" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              class="form-control"
              id="userLoginInputPassword"
              onChange={validatePassword}
            />
            <NavLink to="/" className="form-check--passRecover">
              Recuperar contraseña
            </NavLink>
            <ErrorTip errorText={errorText} name="loginErrorTip" />
          </div>

          <div className="userLoginForm--buttonsContainer">
            <button
              type="submit"
              className="btn userLoginForm--btnSession"
              onClick={loginCheck}
              id="loginButton"
            >
              Iniciar sesión
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
            </button>

            <NavLink
              to="/crear-cuenta"
              className="btn userLoginForm--btnCreate"
            >
              Crear cuenta
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
