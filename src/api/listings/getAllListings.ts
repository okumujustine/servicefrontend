import { TodoServiceInstance } from "../axios"

const getAllListings = async () => {

    const { data: { items } } = await TodoServiceInstance.get("/listed_items")
    return items

}


export { getAllListings }