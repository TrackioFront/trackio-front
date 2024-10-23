import React, { useState } from "react";
import "./PassRecovery.scss";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


interface PassRecoveryProps {
  type: string;
  name: string;
  placeHolder: string;
  value: string;
  code: string;
  classError: string;
  codeSended: boolean;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sendData: (e: React.FormEvent<HTMLFormElement>) => void;
}

const PassRecovery: React.FC<PassRecoveryProps> = ({
  value,
  onChangeEmail,
  sendData,
//   recoveryPassword,
  onCode,
}) => {
  interface SignUpFormInputs {
    email: string;
  }
  const [formErrors, setFormErrors] = useState<Partial<SignUpFormInputs>>({});
  const [errors, setErrors] = useState({ email: "" });
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [formValues, setFormValues] = useState<SignUpFormInputs>({
    email: "",
  });

  const passRecovery = (): void => {
    navigate("/resetPassword", { replace: true });
  };

  const validateForm = () => {
    let errors: Partial<SignUpFormInputs> = {};
    if (!formValues.email) errors.email = "Email is required";
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
    <div className="container">
    <div className="form-container sign-up">
        <form onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleInputChange}
            error={formErrors.email}
          />
          <Button type="submit" text="Sign Up" />
        </form>
      </div>
    </div>
    </>
  );
};

export { PassRecovery };
