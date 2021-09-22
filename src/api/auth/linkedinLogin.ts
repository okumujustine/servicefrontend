
import { AuthServiceInstance } from "../axios"

const linkedinLogin = async (code: string) => {

    const response = await AuthServiceInstance.post(`/o_auth/linkedin`, {
        code
    })
    return response.data

}


export { linkedinLogin }