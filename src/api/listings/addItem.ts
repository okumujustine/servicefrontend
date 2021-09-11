import { ICreateForm } from "../../features/home"
import { TodoServiceInstance } from "../axios"

const createItem = async (item: ICreateForm) => {

    const response = await TodoServiceInstance.post("/post", {
        title: item.title,
        description: item.description,
    })
    return response.data

}


export { createItem }