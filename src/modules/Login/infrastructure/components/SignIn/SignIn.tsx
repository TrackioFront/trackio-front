import React, { useState } from "react";
import Button from "../../../../../components/Button/Button";
import Input from "../../../../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, setIsLogin } from "../../../../../slices/userSlice";
import LoginController from "../../controllers/Login.controller";
import LoginUseCases from "../../../application/LoginUseCases";
import showAlert from "../../../../../utils/alertService";
import SocialMedia from "../SocialMedia/SocialMedia";

const loginController = new LoginController();

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showSignInPassword, setShowSignInPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = { email: "", password: "" };
    let valid = true;

    if (!formValues.email) {
      formErrors.email = "Email is required";
      valid = false;
    }

    if (!formValues.password) {
      formErrors.password = "Password is required";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const onSignInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const { email, password } = formValues;
    const login = await LoginUseCases.userLogin(loginController, {
      email,
      password,
    });

    if (login.status === 200) {
      dispatch(setUser(login?.data));
      dispatch(setIsLogin(true));
      navigate("/dashboard", { replace: true });
    } else {
      showAlert("Credenciales incorrectas", "error");
    }
  };

  return (
    <>
      <div className="form-container sign-in">
        <form onSubmit={onSignInSubmit}>
          <SocialMedia title="Sign in" />
          <span>or use your account</span>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <div className="password-container">
            <Input
              name="password"
              type={showSignInPassword ? "text" : "password"}
              placeholder="Password"
              value={formValues.password}
              onChange={handleInputChange}
              error={errors.password}
              showPasswordToggle={true}
            />
          </div>
          <Button type="submit" text="Sign In" />
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <Button id="login" text="Sign In" />
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend</h1>
            <p>Enter your personal details and start journey with us</p>
            <Button id="register" text="Sign Up" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
