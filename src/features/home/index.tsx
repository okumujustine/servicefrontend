import React, {useState} from 'react'
import * as Yup from 'yup';
import {
    Formik,
    Form,
} from 'formik';
import {  toast } from 'react-toastify';

import InputWithErrorWrapper, { TextAreaWithErrorWrapper } from '../auth/components/InputWithErrorWrapper'
import backendAPI from '../../api';
import Button from '../components/Button';
import CustomTitle from '../components/CustomTitle';

export interface ICreateForm {
    title: string;
    description: string;
}

export const CreateItemSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Title should be more than 2 characters')
        .max(50, 'Title must be less than 50 characters')
        .required('Title is required'),
    description: Yup.string()
        .min(7, 'Description Title should be more than 7 characters')
        .max(200, 'Description should be less than 200 characters')
        .required('Description is required'),
});


export default function Index() {
    const [loading, setLoading] = useState(false)

    const initialValues: ICreateForm = {
        title: '',
        description: ''
    };


    const submitAction = async (values, { resetForm, setSubmitting }) => {
        setLoading(true)
        setSubmitting(true);
           
        try {
    
            await backendAPI.createItem(values)
    
            setTimeout(() => {
                toast.success("Item successfully created")
                resetForm();
                setSubmitting(false);
                setLoading(false)
            },1000)
    
        } catch (err) {
            toast.error(err.response ? err.response.data.message : "Error creating item, try again later");
            setSubmitting(false);
            setLoading(false)
        }
    
    }

    return (
        <div>
            <CustomTitle title="Create Item"/>
            <Formik
                initialValues={initialValues}
                validationSchema={CreateItemSchema}
                onSubmit={submitAction}
            >
                {({ errors, touched }) => (
                    <Form>
                        <InputWithErrorWrapper
                            id="title"
                            placeholder="Title"
                            error={errors.title}
                            touched={touched.title}
                        />

                        <TextAreaWithErrorWrapper
                            id="description"
                            placeholder="Description"
                            error={errors.description}
                            touched={touched.description}
                        />

                        <Button loading={loading} title="Create Item"/>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
