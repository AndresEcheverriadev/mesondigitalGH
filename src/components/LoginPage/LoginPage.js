import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logoLogin from "../../images/logo.svg";
import useValidator from "../../meta/useValidator";
import ErrorTip from "../ErrorTip/ErrorTip";
import logoCheck from "../../images/check.svg";
import "./LoginPage.css";
import "./LoginPageResponsive.css";

function LoginPage() {
  const {
    validateEmail,
    validatePassword,
    loginCheck,
    modalText,
    modalIconCheck,
    modalIconError,
    modalName,
    setModalName,
    modalActivator,
  } = useValidator();

  useEffect(() => {
    modalActivator("modalLoginUser");
  });

  return (
    <div className="loginPageMainWrapper">
      <div
        class="modal fade"
        // id="modalLoginUser"
        id={modalName}
        tabindex="-1"
        aria-labelledby="modalLoginUser"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              {/* <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
            </div>
            <div class="modal-body">
              <div className="modalIcon">
                {modalIconCheck === true ? <img src={logoCheck}></img> : null}
                {modalIconError === true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x xIcon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                ) : null}
              </div>
              <h5>{modalText}</h5>
            </div>
            <div class="modal-footer">
              {/* <button
                type="button"
                class="btn btn-secondary btnModal"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button> */}
            </div>
          </div>
        </div>
      </div>

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
            <ErrorTip
              errorText="Debes ingresar tus datos correctamente"
              name="loginErrorTip"
            />
          </div>

          <div className="userLoginForm--buttonsContainer">
            <button
              type="submit"
              className="btn userLoginForm--btnSession"
              onClick={loginCheck}
              data-bs-toggle="modal"
              data-bs-target="#modalLoginUser"
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
