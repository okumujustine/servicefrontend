
import { NotificationServiceInstance } from "../axios"

const myNotificationRequests = async () => {

    const response = await NotificationServiceInstance.get("/find_my_notifications")
    return response.data

}


export { myNotificationRequests }