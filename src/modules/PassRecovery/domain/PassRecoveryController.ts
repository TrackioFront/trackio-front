import { GenericResponse } from "../../../models/Http";
import { TokenModel } from "../../../shared/domain/TokenModel";

export interface DataToPassRecovery extends TokenModel {
    email: string;
}

export interface IPassRecoveryController {
    userPassRecovery(data: DataToPassRecovery): Promise<GenericResponse>
    sendCode(data: DataToPassRecovery): Promise<GenericResponse>
}