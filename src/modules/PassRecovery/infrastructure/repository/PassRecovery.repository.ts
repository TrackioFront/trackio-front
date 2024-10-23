import { GenericResponse } from '../../../../models/Http';
import { DataToPassRecovery } from '../../domain/PassRecoveryController';

export default class PassRecoveryRepository {
    private urlServer = process.env.REACT_APP_API_URL;
    async userPassRecovery(data: DataToPassRecovery): Promise<Boolean> {
        console.log(data)
        return true
    }

    async sendCode (data: DataToPassRecovery): Promise<GenericResponse> {
        const response = await fetch(this.urlServer + `/email-sender/reset-password/${data.email}`)
        const responseJson = await response.json();
        return responseJson        
    }
}