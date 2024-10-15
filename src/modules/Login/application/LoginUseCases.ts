import { ILoginController, DataToUserLogin } from "../domain/LoginController";
import { GenericResponse } from "../../../models/Http";
export default class LoginUseCases {
 static async userLogin(controller: ILoginController, data: DataToUserLogin): Promise<GenericResponse> {
        const response: GenericResponse = await controller.userLogin(data);
        return {
            data: response?.data, 
            status: response?.status, 
            message: response?.message
        };
    }
}