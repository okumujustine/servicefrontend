import { AuthServiceInstance } from "../axios"

const getLoggedInUser = async () => {

    const response = await AuthServiceInstance.get("/currentuser")
    return response.data

}


export { getLoggedInUser }