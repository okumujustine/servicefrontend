import { AuthServiceInstance } from "../axios"

const verifyFacebookToken = async (userId:string, accessToken:string) => {
    
    const response = await AuthServiceInstance.post("/o_auth/facebook", {
        userId,
        facebookToken:accessToken
    })
    return response.data

}


export { verifyFacebookToken }