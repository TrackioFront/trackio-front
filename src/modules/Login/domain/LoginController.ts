import { GenericResponse } from "../../../models/Http";

export interface DataToUserLogin {
    email: string;
    password: string;}


export interface ILoginController {
    userLogin(data: DataToUserLogin): Promise<GenericResponse>
}