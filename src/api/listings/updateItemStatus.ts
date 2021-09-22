import { TodoServiceInstance } from "../axios"

const updateItemStatus = async ({ itemId, status }: { itemId: string, status: string }) => {

    const response = await TodoServiceInstance.post("/update_my_item_status", {
        itemId,
        status
    })
    return response.data

}


export { updateItemStatus }