import { GenericResponse } from "../../../../models/Http";
import { DataToUserLogin } from "../../domain/LoginController";

export default class LoginRepository {
    private urlServer = process.env.REACT_APP_API_URL;
    async userLogin(data: DataToUserLogin): Promise<GenericResponse> {
        const response = await fetch(this.urlServer + '/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const responseJson = await response.json();
        return responseJson
    }
}