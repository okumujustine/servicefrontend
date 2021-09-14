import React from 'react'
import * as Yup from 'yup';
import {
    Formik,
    Form,
} from 'formik';

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
        .min(2, 'Title is too short')
        .max(50, 'Title is too long')
        .required('Title is required'),
    description: Yup.string()
        .min(7, 'Description is too short')
        .max(200, 'Description is too long')
        .required('Description is required'),
});


const submitAction = async (values, { resetForm, setSubmitting }) => {

    setSubmitting(true);
       
    try {
        const createdItem = await backendAPI.createItem(values)
        alert("Item successfully created")
        resetForm();

        console.log(createdItem)
    } catch (err) {
        console.log(err.response.message);
    }

    setSubmitting(false);
}

export default function index() {
    const initialValues: ICreateForm = {
        title: '',
        description: ''
    };

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

                        <Button title="Create Item"/>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
