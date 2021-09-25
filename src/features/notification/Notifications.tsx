import React from 'react'
import { useSelector } from 'react-redux'
import {  toast } from 'react-toastify';
import backendAPI from '../../api';
import { RootState } from '../../app/store';
import { INotificationState } from '../../store/items/notifications'
import CustomTitle from '../components/CustomTitle';

export default function Notifications() {
    const notificationsState: INotificationState = useSelector((state: RootState) => state.notificationsState)

    const acceptHelpRequest = async (notification:any) => {
    
        console.log("notification", notification)
        
        try{
           await  backendAPI.addItemHelper({
                notificationId: notification._id,
                helper: notification.user,
                itemId: notification.item.id,
            })
            toast.success("Helper added successfully")
            setTimeout(() =>{
                window.location.reload()
            },1000)
            
        }catch(error){
            console.log(error.response)
            toast.error(error.response ? error.response.data.message : "Error while adding helper, try again later")
        }
    }

    return (
        <div>
            {notificationsState?.notifications.length <=0 ? <div>
                <CustomTitle title="No notifications found" />
            </div> : null}
            
           {notificationsState?.notifications.map((notification, index) => {
               return <div className="bg-gray-50 py-3 px-6 rounded-md mb-2" key={index}>
                   <p className="text-gray-500"><i className="text-black">{notification?.user?.username} </i>requested to help with item <i className="text-black">{notification.item.title}</i></p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full mt-2" onClick={() => acceptHelpRequest(notification)}>Accept</button>
               </div>
           })} 
        </div>
    )
}
