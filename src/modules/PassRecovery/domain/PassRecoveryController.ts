import { User } from "../../../models/User";

export interface DataToPassRecovery {
    email: string;
}

export interface IPassRecoveryController {
    userPassRecovery(data: DataToPassRecovery): Promise<User>
    sendCode(data: DataToPassRecovery): Promise<User>
}