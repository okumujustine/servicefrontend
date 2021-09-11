import React from 'react'
import {
    Formik,
    Form,
} from 'formik';
import { RegisterValidationSchema } from './authValidationSchema';
import InputWithErrorWrapper from './components/InputWithErrorWrapper';

interface IDefaultLoginForm {
    username: string;
    email: string;
    password: string;
}

export default function Register() {
    const initialValues: IDefaultLoginForm = {
        username: '',
        email: '',
        password: ''
    };

    const submitAction = (values, { resetForm, setSubmitting }) => {
        setSubmitting(false);
        resetForm();
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={RegisterValidationSchema}
                onSubmit={submitAction}
            >
                {({ errors, touched }) => (
                    <Form>
                        <InputWithErrorWrapper
                            id="username"
                            placeholder="Username"
                            error={errors.username}
                            touched={touched.username}
                        />

                        <InputWithErrorWrapper
                            id="email"
                            placeholder="Email"
                            error={errors.email}
                            touched={touched.email}
                        />

                        <InputWithErrorWrapper
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
