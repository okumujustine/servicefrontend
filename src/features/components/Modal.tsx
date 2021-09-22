import React from 'react'
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root')

interface IModal {
    isOpen:boolean;
    closeModal:()=>void;
    children:React.ReactElement;
    onConfirm?:()=>void;
    confirmHidden?:boolean;
}
export default function ItemUpdateModal({
    isOpen,
    closeModal,
    children,
    onConfirm,
    confirmHidden=true
}:IModal) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div>
                {children}
                <div className="flex justify-between mt-5">
                    <button className="bg-red-700 text-white px-4 py-2 rounded-md mr-4" onClick={closeModal}>Cancel</button>
                    {confirmHidden ? null : <button className="bg-blue-700 text-white px-4 py-2 rounded-md ml-4" onClick={onConfirm}>Confirm</button>}
                </div>
            </div>
        </Modal>
    )
}
