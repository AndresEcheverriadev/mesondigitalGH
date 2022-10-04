import React from "react";
import { NavLink } from "react-router-dom";
import logoLogin from "../../images/logo.svg";
import useValidator from "../../meta/useValidator";
import ErrorTip from "../ErrorTip/ErrorTip";
import "./RegisterPage.css";
import "./RegisterPageResponsive.css";

function RegisterPage() {
  const { validateEmail, validatePassword, loginCheck } = useValidator();
  return (
    <div className="loginPageMainWrapper">
      <div className="viewRegisterPageWrapper">
        <header className="headerLoginContainer">
          <NavLink to="/" className="loginLogoContainer">
            <img src={logoLogin} alt="" />
          </NavLink>
        </header>
        <form className="userRegisterFormContainer">
          <div className="personalDataContainer">
            <div class="mb-3">
              <label for="userLoginInputEmail" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                class="form-control"
                id="userLoginInputEmail"
                aria-describedby="emailHelp"
                onChange={validateEmail}
              />
              <ErrorTip
                errorText="Debe Ingresar un nombre"
                name="nameErrorTip"
              />
            </div>
            <div class="mb-3">
              <label for="userLoginInputEmail" className="form-label">
                Apellido Paterno
              </label>
              <input
                type="text"
                class="form-control"
                id="userLoginInputEmail"
                aria-describedby="emailHelp"
                onChange={validateEmail}
              />
              <ErrorTip
                errorText="Debe Ingresar un nombre"
                name="nameErrorTip"
              />
            </div>
            <div class="mb-3">
              <label for="userLoginInputEmail" className="form-label">
                Apellido Materno
              </label>
              <input
                type="text"
                class="form-control"
                id="userLoginInputEmail"
                aria-describedby="emailHelp"
                onChange={validateEmail}
              />
              <ErrorTip
                errorText="Debe Ingresar un nombre"
                name="nameErrorTip"
              />
            </div>
            <div class="mb-3">
              <label for="userLoginInputEmail" className="form-label">
                RUT
              </label>
              <input
                type="text"
                class="form-control"
                id="userLoginInputEmail"
                aria-describedby="emailHelp"
                onChange={validateEmail}
              />
              <ErrorTip
                errorText="Debe Ingresar un nombre"
                name="nameErrorTip"
              />
            </div>
          </div>

          <div className="registerDataContainer">
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
              <ErrorTip
                errorText="Debes ingresar tus datos correctamente"
                name="loginErrorTip"
              />
            </div>
            <div class="mb-3">
              <label for="userLoginInputPassword" className="form-label">
                Repetir Contraseña
              </label>
              <input
                type="password"
                class="form-control"
                id="userLoginInputPassword"
                onChange={validatePassword}
              />
              <ErrorTip
                errorText="Debes ingresar tus datos correctamente"
                name="loginErrorTip"
              />
            </div>
            <div className="disclaimerContainer">
              <p>
                Tus datos personales serán usados para agilizar la creación de
                documentos notariales.
              </p>
            </div>
          </div>

          <div className="userRegisterButtonsContainer">
            <button
              type="submit"
              className="btn userRegisterForm--btnRegister"
              onClick={loginCheck}
            >
              Crear cuenta
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
            <NavLink to="/login" className="btn userRegisterForm--btnLogin">
              Ya tengo cuenta
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
