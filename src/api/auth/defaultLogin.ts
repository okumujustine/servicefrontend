import { IDefaultLoginForm } from "../../features/auth/DefaultLogin"
import { AuthServiceInstance } from "../axios"

const defaultLogin = async ({ username_email, password }: IDefaultLoginForm) => {

    const response = await AuthServiceInstance.post("/login", {
        username_email,
        password
    })
    return response.data

}


export { defaultLogin }