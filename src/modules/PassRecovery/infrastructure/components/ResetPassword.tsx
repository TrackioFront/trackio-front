import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PassRecovery.scss";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";

interface SignUpFormInputs {
  password: string;
  confirmPassword: string;
}

const ResetPassWord = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formValues, setFormValues] = useState<SignUpFormInputs>({
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState<Partial<SignUpFormInputs>>({});
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    let errors: Partial<SignUpFormInputs> = {};
    if (!formValues.password) errors.password = "Password is required";
    if (!formValues.confirmPassword)
      errors.confirmPassword = "Confirm Password is required";
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
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    console.log(token);
    if (!token) {
      navigate("/resetPassword", { replace: true });
    } else {
    }
  }, [location, navigate]);

  return (
    <div className="container">
      <div className="form-container sign-up">
        <form onSubmit={handleSubmit}>
          <span>or use your email for registration</span>
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
          <Button type="submit" text="Cambiar contraseña" />
        </form>
      </div>
            <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend</h1>
            <p>Enter your personal details and start journey with us</p>
            <Button id="register" text="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ResetPassWord };
