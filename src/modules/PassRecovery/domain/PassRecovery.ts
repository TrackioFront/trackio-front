import { GenericResponse } from "../../../models/Http"

export interface DataPassRecovery {
    email: string,
    code?: string
}

export interface IPassRecoveryController {
    userPassRecovery(data: DataPassRecovery): Promise<GenericResponse>
    sendCode(data: DataPassRecovery): Promise<GenericResponse>
}