import React, {useEffect} from 'react'
import {
    Formik,
    Form,
} from 'formik';
import { useParams } from "react-router-dom";

import Button from '../components/Button';
import { ResetPasswordSchema } from './authValidationSchema';
import InputWithErrorWrapper from './components/InputWithErrorWrapper';

export interface IResetPasswordForm {
    password: string;
    password2: string;
}

export default function ResetPassword() {
    const { userId, token } = useParams();

    useEffect(() => {
        console.log(userId, token )
        if(!userId || !token) {
            alert('Invalid link')
        }
        // eslint-disable-next-line
    },[])

    const initialValues: IResetPasswordForm = {
        password: '',
        password2: '',
    };

    const submitAction = async (values, { resetForm, setSubmitting }) => {
        setSubmitting(true)
        console.log(`values:${values}, userId:${userId}, token:${token}` )

        resetForm()
    }

    return (
            <div>
            <Formik
                initialValues={initialValues}
                validationSchema={ResetPasswordSchema}
                onSubmit={submitAction}
            >
                {({ errors, touched }) => (
                    <Form>
                        <InputWithErrorWrapper
                            id="password"
                            placeholder="Password"
                            error={errors.password}
                            touched={touched.password}
                        />
                        <InputWithErrorWrapper
                            id="password2"
                            placeholder="Confirm password"
                            error={errors.password2}
                            touched={touched.password2}
                        />

                        <Button title="Send" />
                    </Form>
                )}
            </Formik>
        </div>
    )
}
