
import { AuthServiceInstance } from "../axios"

const resetPassword = async ({ userId, accessToken, password, password2 }: any) => {

    const response = await AuthServiceInstance.post(`/reset-password/${userId}/${accessToken}`, {
        password,
        password2
    })
    return response.data

}


export { resetPassword }