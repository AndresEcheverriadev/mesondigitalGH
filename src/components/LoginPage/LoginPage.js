import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg";
import useValidator from "../../meta/useValidator";
import ErrorTip from "../ErrorTip/ErrorTip";
import "./LoginPage.css";
import "./LoginPageResponsive.css";

function LoginPage() {
  const { validateEmail, validatePassword, loginCheck } = useValidator();
  return (
    <div className="loginPageMainWrapper">
      <div className="viewloginPageWrapper">
        <header className="headerContainer">
          <NavLink to="/" className="logoContainer">
            <img src={Logo} alt="" />
          </NavLink>
        </header>

        <form className="userLoginFormContainer">
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Nombre de usuario o correo electrónico
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
              name={"emailErrorTip"}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={validatePassword}
            />
            <ErrorTip
              errorText="Debes escribir un password"
              name={"passwordErrorTip"}
            />
          </div>
          <div class="mb-3 form-check">
            <div className="form-check--passRemember">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Recordarme
              </label>
            </div>
            <div className="form-check--passRecover">
              <NavLink to="/">Recuperar contraseña</NavLink>
            </div>
          </div>
          <ErrorTip
            errorText="Debes ingresar tus datos correctamente"
            name={"loginErrorTip"}
          />
          <div className="userLoginForm--buttonsContainer">
            <button
              type="submit"
              className={`btn btn-primary userLoginForm--btnSession`}
              onClick={loginCheck}
            >
              Iniciar sesión
            </button>
            <NavLink to="/crear-cuenta">
              <button
                type="submit"
                className="btn btn-outline-primary userLoginForm--btnCreate"
              >
                Crear cuenta
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
