
import { NotificationServiceInstance } from "../axios"

const createNotification = async (item: any) => {

    const finalItem = {
        _id: item._id,
        userId: item.userId,
        title: item.title,
        description: item.description,
        status: item.status,
        user: item.user
    }

    const response = await NotificationServiceInstance.post("/create", {
        item: finalItem
    })
    return response.data

}


export { createNotification }