import { TodoServiceInstance } from "../axios"

const openSearch = async (query: string) => {

    const response = await TodoServiceInstance.post("/item_search_without_log_in", {
        query
    })
    return response.data?.searchResults

}


export { openSearch }