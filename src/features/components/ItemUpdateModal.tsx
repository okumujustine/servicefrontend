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

export default function ItemUpdateModal({
  updateModal,
  closeUpdateModal,
  itemTitle
}) {
  return (
    <Modal
      isOpen={updateModal}
      onRequestClose={closeUpdateModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="px-6 py-5">
        <h5 className="underline">CHOSE UPDATE THE STATUS OF</h5>
        <h6><i>{itemTitle}</i></h6>
        <div className="flex justify-between mt-5">
          <button className="bg-red-700 text-white px-4 py-2 rounded-md mr-4" onClick={closeUpdateModal}>Cancel</button>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md ml-4" onClick={closeUpdateModal}>Confirm</button>
        </div>
      </div>
    </Modal>
  )
}
