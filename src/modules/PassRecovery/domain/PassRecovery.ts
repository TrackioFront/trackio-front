import { GenericResponse } from "../../../models/Http"

export interface PassRecovery {
    email: string,
    code?: string
}

export interface IPassRecoveryController {
    userPassRecovery(data: PassRecovery): Promise<Boolean>
    sendCode(data: PassRecovery): Promise<GenericResponse>
}