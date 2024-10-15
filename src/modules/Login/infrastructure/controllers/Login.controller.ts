import { ILoginController, DataToUserLogin } from "../../domain/LoginController";
import LoginRepository from "../repository/Login.repository";
import { GenericResponse } from "../../../../models/Http";

export default class LoginController implements ILoginController {
    repository: LoginRepository;

    constructor() {
        this.repository = new LoginRepository();
    }

    async userLogin(data: DataToUserLogin): Promise<GenericResponse> {
        const response:GenericResponse = await this.repository.userLogin(data);
        return {
            data: response?.data, 
            status: response?.status, 
            message: response?.message, 
        };
    }
}