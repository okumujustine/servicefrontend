import { AuthServiceInstance } from "../axios"

const verifyGoogleToken = async (token: string) => {
    
    const response = await AuthServiceInstance.post("/o_auth/google", {
        googleToken: token
    })
    return response.data

}


export { verifyGoogleToken }