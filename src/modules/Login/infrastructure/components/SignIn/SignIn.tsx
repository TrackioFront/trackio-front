import React, { useState } from "react";
import Button from "../../../../../components/Button/Button";
import Input from "../../../../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, setIsLogin } from "../../../../../slices/userSlice";
import LoginController from "../../controllers/Login.controller";
import LoginUseCases from "../../../application/LoginUseCases";
import showAlert from "../../../../../utils/alertService";
import { useTranslation } from "react-i18next";

interface SignInProps {
  handleRegisterClick: () => void;
}
const loginController = new LoginController();

const SignIn: React.FC<SignInProps> = (handleRegisterClick) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const { t } = useTranslation();

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
      formErrors.email = t("emailRequired");
      valid = false;
    }

    if (!formValues.password) {
      formErrors.password = t("passwordRequired");
      formErrors.password = (t("passwordRequired"));
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const onSignInSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
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
      showAlert(t("credentialsError"), "error");
    }
  };

  return (
    <>
      <div className="form-container sign-in">
        <form onSubmit={onSignInSubmit}>
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
          <Button type="submit" text={t("signIn")} />
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>{t("welcome")}</h1>
            <p>
              {t("welcomeText")}
            </p>
            <Button id="login" text="Sign In" />
          </div>
          <div className="toggle-panel toggle-right">
            <h1>{t("hello")}</h1>
            <p>{t("resetPasswordText")}</p>
            <Button id="register" text={t("resetPassword")} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
