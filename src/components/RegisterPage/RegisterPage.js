import React from "react";
import { NavLink } from "react-router-dom";
import logoLogin from "../../images/logo.svg";
import useValidator from "../../meta/useValidator";
import ErrorTip from "../ErrorTip/ErrorTip";
import "./RegisterPage.css";
import "./RegisterPageResponsive.css";

function RegisterPage() {
  const {
    validateName,
    validatePaterno,
    validateMaterno,
    validateRut,
    validateEmail,
    validateRegisterPassword,
    validatePasswordRepeat,
    registerCheck,
    handleTermsCheckbox,
    errorText,
  } = useValidator();
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
              <label for="userRegisterName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                class="form-control"
                id="userRegisterName"
                aria-describedby="userRegisterName"
                onChange={validateName}
              />
              <ErrorTip
                errorText="Tu nombre solo puede contener letras"
                name="nameErrorTip"
              />
            </div>

            <div class="mb-3">
              <label for="userRegisterPaterno" className="form-label">
                Apellido Paterno
              </label>
              <input
                type="text"
                class="form-control"
                id="userRegisterPaterno"
                aria-describedby="userRegisterPaterno"
                onChange={validatePaterno}
              />
              <ErrorTip
                errorText="Tu apellido solo puede contener letras"
                name="paternoErrorTip"
              />
            </div>

            <div class="mb-3">
              <label for="userRegisterMaterno" className="form-label">
                Apellido Materno
              </label>
              <input
                type="text"
                class="form-control"
                id="userRegisterPaterno"
                aria-describedby="userRegisterMaterno"
                onChange={validateMaterno}
              />
              <ErrorTip
                errorText="Tu apellido solo puede contener letras"
                name="maternoErrorTip"
              />
            </div>

            <div class="mb-3">
              <label for="userRegisterRut" className="form-label">
                RUT
              </label>
              <div className="inputRutContainer">
                <input
                  type="number"
                  class="form-control"
                  id="userRegisterRut"
                  aria-describedby="userRegisterRut"
                  onChange={validateRut}
                />
                <p />-
                <input
                  type="text"
                  class="form-control"
                  id="userRegisterRutVerificador"
                  aria-describedby="userRegisterRutVerificador"
                  maxlength="1"
                  onChange={validateRut}
                />
              </div>

              <ErrorTip errorText="Rut no válido" name="rutErrorTip" />
            </div>

            {/* <div className="disclaimerContainer">
              <p>
                Tus datos personales serán usados para agilizar la creación de
                documentos.
              </p>
            </div> */}
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
              <label for="userRegisterInputPassword" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                class="form-control"
                id="userRegisterInputPassword"
                onChange={validateRegisterPassword}
              />
              <ErrorTip
                errorText="Tu contraseña debe ser de 6 caracteres de largo mínimo y debe contener números y letras mayusculas/minusculas"
                name="registerPasswordErrorTip"
              />
            </div>

            <div class="mb-3">
              <label for="userRegisterPasswordRepeat" className="form-label">
                Repetir Contraseña
              </label>
              <input
                type="password"
                class="form-control"
                id="userRegisterPasswordRepeat"
                onChange={validatePasswordRepeat}
              />
              <ErrorTip
                errorText="La contraseña no coincide"
                name="repeatPasswordErrorTip"
              />
            </div>

            <div class="termsCheckboxContainer">
              <input
                type="checkbox"
                id="termsCheckbox"
                onClick={handleTermsCheckbox}
              />
              <p>
                Acepto los <NavLink to="/">Términos y Condiciones</NavLink> de
                uso del sitio web
              </p>
            </div>
          </div>

          <div className="userRegisterButtonsContainer">
            <div className="userRegisterTipWrapper">
              <ErrorTip errorText={errorText} name="registerErrorTip" />
            </div>

            <div className="userRegisterButtonsWrapper">
              <button
                type="submit"
                className="btn userRegisterForm--btnRegister"
                onClick={registerCheck}
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
