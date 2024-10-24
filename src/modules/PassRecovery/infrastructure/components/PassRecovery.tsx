import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Input  from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { DataPassRecovery } from '../../domain/PassRecovery';
import { emailValidate } from '../../../../utils/validate';
import { GenericResponse } from "../../../../models/Http";
import PassRecoveryUseCases from "../../application/PassRecoveryUseCases";
import PassRecoveryController from "../controllers/PassRecovery.controller";
import showAlert from "../../../../utils/alertService";


const passRecoveryController = new PassRecoveryController();


const PassRecovery: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [classError, setClassError] = useState('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newEmail = e.target.value;
      const valid = emailValidate(newEmail);
      setClassError(valid ? '' : 'invalid');
      setEmail(newEmail);
  }

  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (email === '') {
          alert(t('requiredField'));
          return;
      }
      const data = {
          email
      }
      const response: GenericResponse = await PassRecoveryUseCases.sendCode(passRecoveryController, data);
      console.log(response);
      if (response.status === 200) {
          showAlert(t("sendCode"), "success");
          setEmail('');
      }
  }
    
    return (
        <div className="form-container sign-up">
        <form onSubmit={sendData}>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChangeEmail}
            error={classError}
          />
          <Button type="submit" text={t("resetPassword")} />
        </form>
      </div>
    )
}

export { PassRecovery }