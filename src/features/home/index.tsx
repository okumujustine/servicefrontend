import React from 'react'
import * as Yup from 'yup';
import {
    Formik,
    Form,
} from 'formik';

import InputWithErrorWrapper, { TextAreaWithErrorWrapper } from '../auth/components/InputWithErrorWrapper'
import backendAPI from '../../api';

export interface ICreateForm {
    title: string;
    description: string;
}

export const CreateItemSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    description: Yup.string()
        .min(5, 'Too Short!')
        .max(300, 'Too Long!')
        .required('Required')
});


const submitAction = async (values, { resetForm, setSubmitting }) => {

    setSubmitting(true);
       
    try {
        const createdItem = await backendAPI.createItem(values)
       console.log(createdItem) 
        alert("Item successfully created")

        resetForm();
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

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
