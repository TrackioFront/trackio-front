import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./PassRecovery.scss";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import PassRecoveryUseCases from "../../application/PassRecoveryUseCases";
import PassRecoveryController from "../controllers/PassRecovery.controller";
import showAlert from "../../../../utils/alertService";

interface SignUpFormInputs {
  password: string;
  confirmPassword: string;
}

const passRecoveryController = new PassRecoveryController();

const ResetPassWord = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [newPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [formErrors, setFormErrors] = useState<Partial<SignUpFormInputs>>({});
  const [token, setToken] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenParam = params.get("token");
    if (tokenParam) {
      setToken(tokenParam);
    }
  }, [location.search]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmValue = e.target.value;
    setConfirmPassword(confirmValue);
    setPasswordsMatch(newPassword === confirmValue);
  };

  const validateForm = () => {
    let errors: Partial<SignUpFormInputs> = {};
    if (!newPassword) errors.password = "Password is required";
    if (!confirmPassword) errors.confirmPassword = "Confirm Password is required";
    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0 && passwordsMatch) {
      console.log("Sign Up Data:", { newPassword, confirmPassword });
      const data: any = { newPassword, token };
      const response = await PassRecoveryUseCases.userPassRecovery(passRecoveryController, data);
      console.log(response);
      if (response.status === 200) {
        navigate("/login");
        showAlert(t("recoverySuccess"), "success");
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="container">
      <div className="form-container sign-in">
        <form onSubmit={handleSubmit}>
          <span>{t("recoveryPassword")}</span>
          <div className="password-container">
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={newPassword}
              onChange={handlePasswordChange}
              error={formErrors.password}
              showPasswordToggle={true}
            />
          </div>
          <div className="password-container">
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              error={passwordsMatch ? formErrors.confirmPassword : "Passwords do not match"}
              showPasswordToggle={true}
            />
          </div>
          <Button
            type="submit"
            text={t("resetPassword")}
            disabled={!passwordsMatch || !newPassword || !confirmPassword}
          />
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-right">
            <h1>{t("welcome")}</h1>
            <p>{t("welcomeText")}</p>
            <Button id="register" text={ t("signIn")} onClick={() => navigate("/login")}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ResetPassWord };
