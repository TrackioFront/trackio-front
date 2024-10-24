import { GenericResponse } from "../../../models/Http";
import { IPassRecoveryController, DataPassRecovery } from "../domain/PassRecovery";

export default class PassRecoveryUseCases {
    static async userPassRecovery(controller: IPassRecoveryController, data: DataPassRecovery): Promise<GenericResponse> {
        const response: GenericResponse = await controller.userPassRecovery(data);
        return {data: response, status: 200, message: "User pass recovery"}
    }

    static async sendCode(controller: IPassRecoveryController, data: DataPassRecovery): Promise<GenericResponse> {
        const response: GenericResponse = await controller.sendCode(data);
        return {data: response, status: 200, message: "Send code"}
    }
}