import { useState } from "react";
import validator from "validator";
import useDB from "./useDB";

const useValidator = () => {
  const [inputEmail, setinputEmail] = useState("");
  const [validatedEmail, setvalidatedEmail] = useState(false);
  const [inputPassword, setinputPassword] = useState("");
  const [validatedPassword, setvalidatedPassword] = useState(false);
  const { checkUser } = useDB();

  const [inputRegisterName, setInputRegisterName] = useState("");
  const [validatedRegisterName, setValidatedRegisterName] = useState("");
  const [inputRegisterPaterno, setInputRegisterPaterno] = useState("");
  const [validatedRegisterPaterno, setValidatedRegisterPaterno] = useState("");
  const [inputRegisterMaterno, setInputRegisterMaterno] = useState("");
  const [validatedRegisterMaterno, setValidatedRegisterMaterno] = useState("");
  const [inputRut, setInputRut] = useState("");
  const [validatedRut, setValidatedRut] = useState("");
  const [inputRegisterPassword, setInputRegisterPassword] = useState("");
  const [validatedRegisterPassword, setValidatedRegisterPassword] = useState(
    ""
  );
  const [inputRepeatPassword, setInputRepeatPassword] = useState("");
  const [validatedRepeatPassword, setValidatedRepeatPassword] = useState("");
  const [checkedTerms, setcheckedTerms] = useState(false);
  const [errorText, setErrorText] = useState("");

  const validateEmail = (e) => {
    const inputEmail = e.target.value;
    const emailErrorTip = document.getElementById("emailErrorTip");
    if (validator.isEmail(inputEmail)) {
      setinputEmail(inputEmail);
      setvalidatedEmail(true);
      emailErrorTip.style.visibility = "hidden";
    } else if (inputEmail === "") {
      setvalidatedEmail(false);
      emailErrorTip.style.visibility = "hidden";
    } else {
      setvalidatedEmail(false);
      emailErrorTip.style.visibility = "visible";
    }
  };

  const validateName = (e) => {
    const inputRegisterName = e.target.value;
    const nameErrorTip = document.getElementById("nameErrorTip");
    if (validator.isAlpha(inputRegisterName)) {
      setInputRegisterName(inputRegisterName);
      setValidatedRegisterName(true);
      nameErrorTip.style.visibility = "hidden";
    } else if (inputRegisterName === "") {
      setValidatedRegisterName(false);
      nameErrorTip.style.visibility = "hidden";
    } else {
      setValidatedRegisterName(false);
      nameErrorTip.style.visibility = "visible";
    }
  };

  const validatePaterno = (e) => {
    const inputRegisterPaterno = e.target.value;
    const paternoErrorTip = document.getElementById("paternoErrorTip");
    if (validator.isAlpha(inputRegisterPaterno)) {
      setInputRegisterPaterno(inputRegisterPaterno);
      setValidatedRegisterPaterno(true);
      paternoErrorTip.style.visibility = "hidden";
    } else if (inputRegisterPaterno === "") {
      setValidatedRegisterPaterno(false);
      paternoErrorTip.style.visibility = "hidden";
    } else {
      setValidatedRegisterPaterno(false);
      paternoErrorTip.style.visibility = "visible";
    }
  };

  const validateMaterno = (e) => {
    const inputRegisterMaterno = e.target.value;
    const maternoErrorTip = document.getElementById("maternoErrorTip");
    if (validator.isAlpha(inputRegisterMaterno)) {
      setInputRegisterMaterno(inputRegisterMaterno);
      setValidatedRegisterMaterno(true);
      maternoErrorTip.style.visibility = "hidden";
    } else if (inputRegisterMaterno === "") {
      setValidatedRegisterMaterno(false);
      maternoErrorTip.style.visibility = "hidden";
    } else {
      setValidatedRegisterMaterno(false);
      maternoErrorTip.style.visibility = "visible";
    }
  };

  const validateRut = () => {
    const userRegisterRut = document.getElementById("userRegisterRut");
    const userRegisterRutVerificador = document.getElementById(
      "userRegisterRutVerificador"
    );
    const inputRut = userRegisterRut.value;
    const inputVerificador = userRegisterRutVerificador.value;
    const rutErrorTip = document.getElementById("rutErrorTip");
    if (
      validator.isNumeric(inputRut, { no_symbols: true }) &&
      ((validator.isNumeric(inputVerificador) &&
        validator.isLength(inputVerificador)) ||
        inputVerificador === "k" ||
        inputVerificador === "K")
    ) {
      setInputRut(inputRut, inputVerificador);
      setValidatedRut(true);
      rutErrorTip.style.visibility = "hidden";
    } else {
      setValidatedRut(false);
      rutErrorTip.style.visibility = "visible";
    }
  };

  const validateRegisterPassword = (e) => {
    const inputRegisterPassword = e.target.value;
    const registerPasswordErrorTip = document.getElementById(
      "registerPasswordErrorTip"
    );
    if (
      validator.isStrongPassword(inputRegisterPassword, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      setInputRegisterPassword(inputRegisterPassword);
      setValidatedRegisterPassword(true);
      registerPasswordErrorTip.style.visibility = "hidden";
    } else {
      setValidatedRegisterPassword(false);
      registerPasswordErrorTip.style.visibility = "visible";
    }
  };

  const validatePasswordRepeat = (e) => {
    const inputRepeatPassword = e.target.value;
    const repeatPasswordErrorTip = document.getElementById(
      "repeatPasswordErrorTip"
    );
    if (inputRepeatPassword === inputRegisterPassword) {
      setInputRepeatPassword(inputRegisterPassword);
      setValidatedRepeatPassword(true);
      repeatPasswordErrorTip.style.visibility = "hidden";
    } else {
      setValidatedRepeatPassword(false);
      repeatPasswordErrorTip.style.visibility = "visible";
    }
  };

  const validateNewPassword = (e) => {
    const inputPassword = e.target.value;
    const newPasswordErrorTip = document.getElementById("newPasswordErrorTip");
    if (validator.isStrongPassword(inputPassword) || inputPassword === "") {
      setinputPassword(inputPassword);
      setvalidatedPassword(true);
      newPasswordErrorTip.style.visibility = "hidden";
    } else {
      setvalidatedPassword(false);
      newPasswordErrorTip.style.visibility = "visible";
    }
  };

  const validatePassword = (e) => {
    const inputPassword = e.target.value;
    if (inputPassword === "") {
      setvalidatedPassword(false);
    } else {
      setvalidatedPassword(true);
      setinputPassword(inputPassword);
    }
  };

  const handleTermsCheckbox = () => {
    setcheckedTerms(!checkedTerms);
  };

  const loginCheck = (e) => {
    const errorNoFound = false;
    e.preventDefault();
    const loginErrorTip = document.getElementById("loginErrorTip");
    if (validatedEmail === true && validatedPassword) {
      const loginData = { emailData: inputEmail, passwordData: inputPassword };
      loginErrorTip.style.visibility = "hidden";
      checkUser(loginData);
      if (errorNoFound === true) {
        alert("Usuario no encontrado");
      }
    } else {
      loginErrorTip.style.visibility = "visible";
    }
  };

  const registerCheck = (e) => {
    e.preventDefault();
    const registerErrorTip = document.getElementById("registerErrorTip");
    if (
      validatedEmail === true &&
      validatedRegisterName === true &&
      validatedRegisterMaterno === true &&
      validatedRegisterPaterno === true &&
      validatedRut === true &&
      validatedRegisterPassword === true &&
      validatedRepeatPassword === true &&
      checkedTerms === true
    ) {
      const registerUserData = {
        nameData: inputRegisterName,
        paternoData: inputRegisterPaterno,
        maternoData: inputRegisterMaterno,
        rutData: inputRut,
        emailData: inputEmail,
        passwordData: inputRegisterPassword,
      };
      registerErrorTip.style.visibility = "hidden";
      alert(JSON.stringify(registerUserData));
      return (window.location.href = "/");
    } else if (
      validatedEmail === true &&
      validatedRegisterName === true &&
      validatedRegisterMaterno === true &&
      validatedRegisterPaterno === true &&
      validatedRut === true &&
      validatedRegisterPassword === true &&
      validatedRepeatPassword === true &&
      checkedTerms === false
    ) {
      setErrorText(
        "Debes aceptar los Terminos y Condiciones para poder registrarte"
      );
      registerErrorTip.style.visibility = "visible";
    } else {
      setErrorText(
        "Error en los datos de registro. Debes llenar todos los datos correctamente."
      );
      registerErrorTip.style.visibility = "visible";
    }
  };

  return {
    inputEmail,
    validatedEmail,
    validateEmail,
    inputPassword,
    validatedPassword,
    validatePassword,
    loginCheck,
    validateName,
    validatePaterno,
    validateMaterno,
    validateRut,
    validateRegisterPassword,
    validatePasswordRepeat,
    registerCheck,
    handleTermsCheckbox,
    errorText,
  };
};
export default useValidator;
