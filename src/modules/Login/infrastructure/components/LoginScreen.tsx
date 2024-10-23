import React, { useState, useEffect } from "react";
import "./LoginScreen.scss";
import { PassRecoveryFunctions } from "../../../PassRecovery/infrastructure/components/PassRecoveryFunctions";
import SignIn from "./SignIn/SignIn";

interface SignUpFormInputs {
  name: string;
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);

  const [formValues, setFormValues] = useState<SignUpFormInputs>({
    name: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<Partial<SignUpFormInputs>>({});

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };


  const validateForm = () => {
    let errors: Partial<SignUpFormInputs> = {};
    if (!formValues.name) errors.name = "Name is required";
    if (!formValues.email) errors.email = "Email is required";
    if (!formValues.password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Sign Up Data:", formValues);
    } else {
      setFormErrors(errors);
    }
  };

  useEffect(() => {
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    registerBtn?.addEventListener("click", handleRegisterClick);
    loginBtn?.addEventListener("click", handleLoginClick);

    return () => {
      registerBtn?.removeEventListener("click", handleRegisterClick);
      loginBtn?.removeEventListener("click", handleLoginClick);
    };
  }, []);

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <SignIn />
      <PassRecoveryFunctions />
    </div>
  );
};

export { LoginScreen };
