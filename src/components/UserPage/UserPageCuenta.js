import React, { useContext } from "react";
import { Navigate, NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import UserLinks from "./UserLinks.js";
import UserPageId from "./UserPageId";
import useValidator from "../../meta/useValidator";
import ErrorTip from "../ErrorTip/ErrorTip";
import { LoginContext } from "../Context/LoginContext.js";
import "./UserPage.css";

function UserPageCuenta({ user }) {
  const {
    validateName,
    validatePaterno,
    validateMaterno,
    validateRut,
    validateEmail,
    validatePassword,
    validateRegisterPassword,
    validatePasswordRepeat,
    updateUserCheck,
    updateUser,
    errorText,
    modalText,
  } = useValidator();

  const { userData } = useContext(LoginContext);

  return (
    <div className="userPageMainWrapper">
      <div
        class="modal fade"
        id="modalUpdate"
        tabindex="-1"
        aria-labelledby="modalUpdate"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h5>{modalText}</h5>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary btnModal"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <header className="userPageHeaderContainer">
        <Navbar />
      </header>
      {userData.isLogged === true ? (
        <div className="userPageMain">
          <UserPageId user={user} />
          <div className="userMenu">
            <UserLinks activelink="cuenta" />
          </div>
          <form className="userPageDataWrapper">
            <div className="userPagePersonalDataContainer">
              <div class="inputWrapper">
                <label for="userUpdateName" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  class="form-control inputDisabled"
                  id="userUpdateName"
                  aria-describedby="userUpdateName"
                  placeholder={userData.userNombre}
                  disabled
                />
              </div>

              <div class="inputWrapper">
                <label for="userUpdatePaterno" className="form-label">
                  Apellido Paterno
                </label>
                <input
                  type="text"
                  class="form-control inputDisabled"
                  id="userUpdatePaterno"
                  aria-describedby="userUpdatePaterno"
                  placeholder={userData.userPaterno}
                  disabled
                />
              </div>

              <div class="inputWrapper inputWrapperSpacer">
                <label for="userUpdateMaterno" className="form-label">
                  Apellido Materno
                </label>
                <input
                  type="text"
                  class="form-control inputDisabled"
                  id="userUpdatePaterno"
                  aria-describedby="userUpdateMaterno"
                  placeholder={userData.userMaterno}
                  disabled
                />
              </div>

              <div class="inputWrapper ">
                <label for="userUpdateRut" className="form-label">
                  RUT
                </label>
                <div className="inputUpdateRutContainer">
                  <input
                    type="text"
                    class="form-control inputDisabled"
                    id="userUpdateRut"
                    aria-describedby="userUpdateRut"
                    placeholder={userData.userRut}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="userPageUpdateDataContainer">
              <div class="inputWrapper">
                <label for="userUpdateInputEmail" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="userUpdateInputEmail"
                  aria-describedby="emailHelp"
                  placeholder={userData.userMail}
                  onChange={validateEmail}
                />
                <ErrorTip
                  errorText="Escribe una dirección de correo válida"
                  name="emailErrorTip"
                />
              </div>
              <div class="inputWrapper">
                <label for="userUpdateInputPassword" className="form-label">
                  Contraseña actual
                </label>
                <input
                  type="password"
                  class="form-control inputDisabled"
                  id="userUpdateInputPassword"
                />
              </div>
              <div class="inputWrapper">
                <label for="userUpdateInputPassword" className="form-label">
                  Nueva Contraseña
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="userUpdateInputPassword"
                  onChange={validateRegisterPassword}
                />
                <ErrorTip
                  errorText="Tu contraseña debe ser de 6 caracteres de largo mínimo y debe contener números y letras mayusculas/minusculas"
                  name="passwordErrorTip"
                />
              </div>

              <div class="inputWrapper">
                <label for="userUpdatePasswordRepeat" className="form-label">
                  Repetir Nueva Contraseña
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="userUpdatePasswordRepeat"
                  onChange={validatePasswordRepeat}
                />
                <ErrorTip
                  errorText="La contraseña no coincide"
                  name="repeatPasswordErrorTip"
                />
              </div>
              <div className="userUpdateButtonsContainer">
                {/* <div className="userUpdateTipWrapper">
                <ErrorTip errorText={errorText} name="registerErrorTip" />
              </div> */}

                <button
                  type="submit"
                  className="btn userUpdateBtn"
                  onClick={updateUserCheck}
                  data-bs-toggle="modal"
                  data-bs-target="#modalUpdate"
                >
                  Actualizar Datos
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
              </div>
            </div>
          </form>
        </div>
      ) : (
        <Navigate to="/" replace />
      )}
    </div>
  );
}

export default UserPageCuenta;
