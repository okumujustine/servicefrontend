import React from 'react'
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux'
import {  toast } from 'react-toastify';

import  backendAPI  from '../../api'
import Modal from "./Modal";
import { updateItemStatusOnUI } from '../../store/items/items';



export default function ItemUpdateModal({
  updateModal,
  closeUpdateModal,
  item
}) {

  const dispatch = useDispatch()
  
  const onSubmit = async (values) => {
    try{
      await backendAPI.updateItemStatus({
        itemId:item?._id,
        status:values?.picked
      })
      
      dispatch(updateItemStatusOnUI({
        itemId:item?._id,
        status:values?.picked
      }))

      toast.success(`Item, ${item.title} status update successfully`)
      closeUpdateModal()
    }catch(err){
      toast.error(err.response ? err.response.data.message : "Error trying to update item status")
    }
  }


  return (
    <Modal 
      closeModal={closeUpdateModal} 
      isOpen={updateModal}
    >
      <div className="px-6 py-5">
        <h5 className="underline">CHOSE THE STATUS TO UPDATE TO</h5>
        <h6><i>{item?.title}</i></h6>
        <Formik
      initialValues={{
        picked: '',
      }}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div id="my-radio-group">Status</div>
          <div className="flex flex-col" role="group" aria-labelledby="my-radio-group">
            {item?.status !== "global" ? <label>
              <Field type="radio" name="picked" value="global" />
              Global
            </label> : null}
            {item?.status !== "public" ? <label>
              <Field type="radio" name="picked" value="public" />
              Public
            </label>: null}
            {item?.status !== "private" ? <label>
              <Field type="radio" name="picked" value="private" />
              Private
            </label> : null}
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
      </div>
    </Modal>
  )
}
