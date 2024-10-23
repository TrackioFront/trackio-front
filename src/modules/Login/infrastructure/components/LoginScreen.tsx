import React, { useState, useEffect } from "react";
import "./LoginScreen.scss";
import SignIn from "./SignIn/SignIn";
import { PassRecovery } from "./PassRecovery/PassRecovery";


const LoginScreen: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const registerBtn = document.getElementById("forgotPassword");
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
      {isActive ? <PassRecovery /> : <SignIn handleRegisterClick={handleRegisterClick} />}
    </div>
  );
};


export { LoginScreen };
