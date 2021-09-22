import React, {useEffect} from 'react'
import {
    Formik,
    Form,
} from 'formik';
import { useParams } from "react-router-dom";
import {  toast } from 'react-toastify';

import Button from '../components/Button';
import { ResetPasswordSchema } from './authValidationSchema';
import InputWithErrorWrapper from './components/InputWithErrorWrapper';
import backendAPI from '../../api';

export interface IResetPasswordForm {
    password: string;
    password2: string;
}

export default function ResetPassword() {
    const { userId, token } = useParams();

    useEffect(() => {
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
        
        try{
            await backendAPI.resetPassword({
                userId, 
                accessToken:token, 
                password:values.password,
                password2:values.password2
            })
            

            setTimeout(() => {
                toast.success('Password reset successfully, you can now login')
                setSubmitting(false)
                resetForm()
            },2000)
            
        }catch(err){
            setSubmitting(false)
            toast.error(err.response ? err.response.data.message : "Error resetting password, try again later");
        }
    }

    return (
            <div>
            <Formik
                initialValues={initialValues}
                validationSchema={ResetPasswordSchema}
                onSubmit={submitAction}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <InputWithErrorWrapper
                            id="password"
                            placeholder="Password"
                            type="password"
                            error={errors.password}
                            touched={touched.password}
                        />
                        <InputWithErrorWrapper
                            id="password2"
                            placeholder="Confirm password"
                            type="password"
                            error={errors.password2}
                            touched={touched.password2}
                        />

                        <Button loading={isSubmitting} title="Send" />
                    </Form>
                )}
            </Formik>
        </div>
    )
}
