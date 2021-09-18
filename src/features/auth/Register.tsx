import React from 'react'
import {
    Formik,
    Form,
} from 'formik';
import {  toast } from 'react-toastify';

import { RegisterValidationSchema } from './authValidationSchema';
import InputWithErrorWrapper from './components/InputWithErrorWrapper';
import CustomTitle from '../components/CustomTitle';
import Button from '../components/Button';
import backendAPI from '../../api';

export interface IRegisterUser {
    username: string;
    email: string;
    password: string;
}

export default function Register() {
    const initialValues: IRegisterUser = {
        username: '',
        email: '',
        password: ''
    };

    const submitAction = async (values, { resetForm, setSubmitting }) => {
        setSubmitting(true);

        try{
            await backendAPI.registerUser(values)
            resetForm();
            toast.success(`user ${values.username} successfully created, you can now login`);
            setTimeout(() =>{
                setSubmitting(false);
            },2000)
        }catch(err){
            setSubmitting(false);
            toast.error(err.response.data.message || "Error creating user, try again later");
        }
        
    }

    return (
        <div>
            <CustomTitle title="Register Here"/>
            <Formik
                initialValues={initialValues}
                validationSchema={RegisterValidationSchema}
                onSubmit={submitAction}
            >
                {({ errors, touched, isSubmitting }) => (
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
                            type="password"
                            placeholder="Password"
                            error={errors.password}
                            touched={touched.password}
                        />

                        <Button loading={isSubmitting} title="Register"/>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
