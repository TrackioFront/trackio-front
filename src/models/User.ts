export interface User {
    id: string
    name: string
    lastName: string
    company: string
    email: string
    state: boolean
    password?: string
    token: string
}