
import { TodoServiceInstance } from "../axios"

const addItemHelper = async ({ helper, itemId }: any) => {

    const response = await TodoServiceInstance.post("/add_document_helper", {
        helper,
        itemId
    })
    return response.data

}


export { addItemHelper }