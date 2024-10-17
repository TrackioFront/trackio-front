import React, { useState, useEffect } from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import "./LoginScreen.scss";
import SocialMedia from "./SocialMedia/SocialMedia";
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
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
      {/* Formulario de Sign Up */}
      <div className="form-container sign-up">
        <form onSubmit={handleSubmit}>
          <SocialMedia title="Sign up" />
          <span>or use your email for registration</span>
          <Input
            name="name"
            type="text"
            placeholder="Name"
            value={formValues.name}
            onChange={handleInputChange}
            error={formErrors.name}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleInputChange}
            error={formErrors.email}
          />
          <div className="password-container">
            <Input
              name="password"
              type={showSignUpPassword ? "text" : "password"}
              placeholder="Password"
              value={formValues.password}
              onChange={handleInputChange}
              error={formErrors.password}
              showPasswordToggle={true}
            />
          </div>
          <Button type="submit" text="Sign Up" />
        </form>
      </div>
      <SignIn />
    </div>
  );
};

export { LoginScreen };
