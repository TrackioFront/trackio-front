import { GenericResponse } from "../../../../models/Http";
import { IPassRecoveryController } from "../../domain/PassRecovery";
import { DataToPassRecovery } from "../../domain/PassRecoveryController";
import PassRecoveryRepository from "../repository/PassRecovery.repository";

export default class PassRecoveryController implements IPassRecoveryController {
    repository: PassRecoveryRepository;

    constructor() {
        this.repository = new PassRecoveryRepository();
    }

    async userPassRecovery(data: DataToPassRecovery): Promise<Boolean> {
        const response = await this.repository.userPassRecovery(data);
        return response;
    }

    async sendCode(data: DataToPassRecovery): Promise<GenericResponse> {
        const response = await this.repository.sendCode(data);
        return {
            data: response?.data, 
            status: response?.status, 
            message: response?.message
        };
    }
}

