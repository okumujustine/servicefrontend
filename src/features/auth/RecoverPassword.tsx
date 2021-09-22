import React from 'react'
import {
    Formik,
    Form,
} from 'formik';
import {  toast } from 'react-toastify';

import Button from '../components/Button'
import InputWithErrorWrapper from './components/InputWithErrorWrapper'
import { RecoverPasswordSchema } from './authValidationSchema';
import backendAPI from '../../api';

export interface IRecoverPasswordForm {
    email: string;
}

export default function RecoverPassword() {
    const [resetMsg, setResetMsg] = React.useState<string|null>(null);
    const initialValues: IRecoverPasswordForm = {
        email: '',
    };

    const submitAction = async (values, { resetForm, setSubmitting }) => {
        setSubmitting(true)
        setResetMsg(null);
        try{

            await backendAPI.recoverPassword(values?.email)

            setTimeout(() => {
                setResetMsg(`We have sent you an email with instructions to reset your password. on ${values?.email}`);
                setSubmitting(false)
                resetForm()
            }, 2000)

        }catch(error){
            toast.error(error.response ? error.response.data.message : "Error while sending password recovery email")
            setResetMsg(null);
            setSubmitting(false)
        }
    }

    return (
        <div>
            {resetMsg?
            <span className="py-3 block rounded px-6 bg-blue-50 mb-5">
            {resetMsg}
            </span>:null}
            <Formik
                initialValues={initialValues}
                validationSchema={RecoverPasswordSchema}
                onSubmit={submitAction}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <InputWithErrorWrapper
                            id="email"
                            placeholder="Email address"
                            error={errors.email}
                            touched={touched.email}
                        />

                        <Button loading={isSubmitting} title="Send" />
                    </Form>
                )}
            </Formik>
        </div>
    )
}