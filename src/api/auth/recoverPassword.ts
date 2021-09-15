import { AuthServiceInstance } from "../axios"

const recoverPassword = async (email: string) => {

    const response = await AuthServiceInstance.post("/forget-password", {
        email
    })
    return response.data

}


export { recoverPassword }