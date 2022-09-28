import { useState } from "react";
import validator from "validator";

const useValidator = () => {
  const [inputEmail, setinputEmail] = useState("");
  const [validatedEmail, setvalidatedEmail] = useState(false);
  const [inputPassword, setinputPassword] = useState("");
  const [validatedPassword, setvalidatedPassword] = useState(false);
  const [checkedTerms, setcheckedTerms] = useState(false);

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
    e.preventDefault();
    const loginErrorTip = document.getElementById("loginErrorTip");
    if (
      validatedEmail === true &&
      (validatedPassword === checkedTerms) === true
    ) {
      const loginData = { emailData: inputEmail, passwordData: inputPassword };
      loginErrorTip.style.visibility = "hidden";
      alert(JSON.stringify(loginData));
    } else {
      loginErrorTip.style.visibility = "visible";
    }
  };

  const newUserCheck = (e) => {
    e.preventDefault();
    const newUserErrorTip = document.getElementById("newUserErrorTip");
    const termsErrorTip = document.getElementById("termsErrorTip");
    if (
      validatedEmail === true &&
      validatedPassword === true &&
      checkedTerms === true
    ) {
      const newUserData = {
        emailData: inputEmail,
        passwordData: inputPassword,
      };
      newUserErrorTip.style.visibility = "hidden";
      alert(JSON.stringify(newUserData));
    } else if (
      validatedEmail === true &&
      validatedPassword === true &&
      checkedTerms === true
    ) {
      const newUserData = {
        emailData: inputEmail,
        passwordData: inputPassword,
      };
      newUserErrorTip.style.visibility = "hidden";
      alert(JSON.stringify(newUserData));
    } else if (
      validatedEmail === true &&
      validatedPassword === true &&
      checkedTerms === false
    ) {
      termsErrorTip.style.visibility = "visible";
    } else {
      newUserErrorTip.style.visibility = "visible";
    }
  };

  return {
    inputEmail,
    validatedEmail,
    validateEmail,
    inputPassword,
    validatedPassword,
    validatePassword,
    validateNewPassword,
    handleTermsCheckbox,
    checkedTerms,
    loginCheck,
    newUserCheck,
  };
};
export default useValidator;
