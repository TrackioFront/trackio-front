import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Input  from "../../../../../components/Input/Input";
import Button from "../../../../../components/Button/Button";


interface SignUpFormInputs {
    name: string;
    email: string;
    password: string;
  }

const PassRecovery: React.FC = () => {
    const { t } = useTranslation();
    const [formValues, setFormValues] = useState<SignUpFormInputs>({
        name: "",
        email: "",
        password: "",
      });
    
      const [formErrors, setFormErrors] = useState<Partial<SignUpFormInputs>>({});
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
          console.log("Sign Up Data:", formValues);
        } else {
          setFormErrors(errors);
        }
      };

      const validateForm = () => {
        let errors: Partial<SignUpFormInputs> = {};
        if (!formValues.name) errors.name = "Name is required";
        if (!formValues.email) errors.email = "Email is required";
        if (!formValues.password) errors.password = "Password is required";
        return errors;
      };


      const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
      ) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    

    return (
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
          <Button type="submit" text={t("resetPassword")} />
        </form>
      </div>
    )
}

export { PassRecovery }