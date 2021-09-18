
import { IRegisterUser } from "../../features/auth/Register"
import { AuthServiceInstance } from "../axios"

const registerUser = async ({ username, password, email }: IRegisterUser) => {

    const response = await AuthServiceInstance.post("/create", {
        username,
        email,
        password
    })
    return response.data

}


export { registerUser }