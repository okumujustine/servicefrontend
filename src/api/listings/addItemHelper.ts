
import { TodoServiceInstance } from "../axios"

const addItemHelper = async ({ helper, itemId, notificationId }: any) => {

    const response = await TodoServiceInstance.post("/add_document_helper", {
        notificationId,
        helper,
        itemId
    })
    return response.data

}


export { addItemHelper }