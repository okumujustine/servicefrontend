import { TodoServiceInstance } from "../axios"

const loggedInSearch = async (query: string) => {

    const response = await TodoServiceInstance.post("/item_search_when_logged_in", {
        query
    })
    return response.data?.searchResults

}


export { loggedInSearch }