import { AuthServiceInstance } from "../axios"

const logout = async () => {

    const response = await AuthServiceInstance.post("/logout")
    return response.data

}


export { logout }