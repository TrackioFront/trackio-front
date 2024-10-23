import React, { useState } from "react";
import PassRecoveryController from "../controllers/PassRecovery.controller";
import PassRecoveryUseCases from "../../application/PassRecoveryUseCases";
import { emailValidate } from '../../../../utils/validate';
import { PassRecovery } from "./PassRecovery";
import { GenericResponse } from "../../../../models/Http";
import { useTranslation } from 'react-i18next';

const passRecoveryController = new PassRecoveryController();
const PassRecoveryFunctions = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [classError, setClassError] = useState('');
    const [codeSended, setCodeSended] = useState(false);
    const [code, setCode] = useState('');

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        const valid = emailValidate(newEmail);
        setIsEmailValid(valid);
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
            setCodeSended(true);
        }
    }


    const onCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value);
    }

    return (
        <PassRecovery 
            type='email'
            name='email'
            placeHolder='Email'
            value={email}
            code={code}
            onChangeEmail={onChangeEmail}
            onCode={onCode}
            sendData={sendData}
            codeSended={codeSended} 
            classError={classError}/>
    )
}

export { PassRecoveryFunctions}