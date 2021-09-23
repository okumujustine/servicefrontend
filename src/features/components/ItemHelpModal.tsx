import React from 'react'
import {  toast } from 'react-toastify';

import backendAPI from '../../api'
import Modal from './Modal'

export default function ItemHelpModal({
    item,
    helpModal,
    closeHelpModal
}: any) {

    const onConfirm = async () => {
        
        try{
            await backendAPI.createNotification(item)
            
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
