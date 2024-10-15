/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./LoginScreen.scss";

const LoginScreen: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    const handleRegisterClick = () => {
      if (container) container.classList.add("active");
      setIsActive(true);
    };

    const handleLoginClick = () => {
      if (container) container.classList.remove("active");
      setIsActive(false);
    };

    registerBtn?.addEventListener("click", handleRegisterClick);
    loginBtn?.addEventListener("click", handleLoginClick);


    return () => {
      registerBtn?.removeEventListener("click", handleRegisterClick);
      loginBtn?.removeEventListener("click", handleLoginClick);
    };
  }, []);

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign in</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button id="login">Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend</h1>
            <p>Enter your personal details and start journey with us</p>
            <button id="register">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LoginScreen };
