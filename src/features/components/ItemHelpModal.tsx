import React, { useEffect } from 'react'
import {  toast } from 'react-toastify';
import io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux'

import backendAPI from '../../api'
import { NotificationServiceInstanceURL } from '../../api/axios';
import { RootState } from '../../app/store';
import Modal from './Modal'
import { AuthState } from '../../store/auth/auth';
import { loadNewNotification } from '../../store/items/notifications';

const socket = io(NotificationServiceInstanceURL)

export default function ItemHelpModal({
    item,
    helpModal,
    closeHelpModal
}: any) {

    const auth: AuthState = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (auth.user) {
            socket.emit('join', { user: auth.user.id })
        }

        socket.on('private_notification', (data: any) => {
            dispatch(loadNewNotification(data))
        })
        // eslint-disable-next-line
    }, [])

    const onConfirm = async () => {
        
        try{
            await backendAPI.createNotification(item)
            
            socket.emit("notification", {
                itemId:item?._id,
                userId:auth.user?.id,
            })
            toast.success(`Help request sent successfully`)
            closeHelpModal()

          }catch(err){
            closeHelpModal()
            toast.error(err.response ? err.response.data.message : "Error trying to send help")
          }
    }

    return (
        <Modal
            closeModal={closeHelpModal}
            isOpen={helpModal}
        >
            <div className="px-6 py-5">
                <h5 className="underline">REQUEST TO HELP ON ITEM</h5>
                <h6 className="py-2"><i>{item?.title}</i></h6>
                <button className="bg-blue-800 text-white px-3 py-2 mt-2 rounded-md" onClick={onConfirm}>Confirm</button>
            </div>
        </Modal>
    )
}
