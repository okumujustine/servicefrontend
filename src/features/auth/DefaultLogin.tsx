import React from 'react'
import {
    Formik,
    Form,
} from 'formik';

import { LoginValidationSchema } from './authValidationSchema';
import InputWithErrorWrapper from './components/InputWithErrorWrapper';
import backendAPI from '../../api';

export interface IDefaultLoginForm {
    username_email: string;
    password: string;
}

export default function DefaultLogin() {
    const initialValues: IDefaultLoginForm = {
        username_email: '',
        password: ''
    };

    const submitAction = async (values, { resetForm, setSubmitting }) => {
        setSubmitting(true);
       
        try {
            const loginResult = await backendAPI.defaultLogin(values)
            console.log(loginResult)

            resetForm();
        } catch (err) {
            console.log(err.response.message);
        }

        setSubmitting(false);
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginValidationSchema}
                onSubmit={submitAction}
            >
                {({ errors, touched }) => (
                    <Form>
                        <InputWithErrorWrapper
                            id="username_email"
                            placeholder="Username or email address"
                            error={errors.username_email}
                            touched={touched.username_email}
                        />

                        <InputWithErrorWrapper
                            type="password"
                            id="password"
                            placeholder="Password"
                            error={errors.password}
                            touched={touched.password}
                        />

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
