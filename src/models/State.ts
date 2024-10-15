import { User } from "./User";
export interface State extends User {
    isLoggedIn: boolean
    user: User
}