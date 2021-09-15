import React from 'react'
import {
    Formik,
    Form,
} from 'formik';

import Button from '../components/Button'
import InputWithErrorWrapper from './components/InputWithErrorWrapper'
import { RecoverPasswordSchema } from './authValidationSchema';
import backendAPI from '../../api';

export interface IRecoverPasswordForm {
    email: string;
}

export default function RecoverPassword() {
    const initialValues: IRecoverPasswordForm = {
        email: '',
    };

    const submitAction = async (values, { resetForm, setSubmitting }) => {
        setSubmitting(true)
        try{

            const recoverPassword = await backendAPI.recoverPassword(values?.email)
            console.log("recoverPassword", recoverPassword)
            resetForm()

        }catch(error){
            alert(error.response.data.message || "Error while sending password recovery email")
        }
        setSubmitting(false)
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={RecoverPasswordSchema}
                onSubmit={submitAction}
            >
                {({ errors, touched }) => (
                    <Form>
                        <InputWithErrorWrapper
                            id="email"
                            placeholder="Email address"
                            error={errors.email}
                            touched={touched.email}
                        />

                        <Button title="Send" />
                    </Form>
                )}
            </Formik>
        </div>
    )
}