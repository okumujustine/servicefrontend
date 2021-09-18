import React, {useState} from 'react'
import {
    Formik,
    Form,
} from 'formik';
import { useDispatch } from 'react-redux'
import {
    Link,
  } from "react-router-dom";

import { LoginValidationSchema } from './authValidationSchema';
import InputWithErrorWrapper from './components/InputWithErrorWrapper';
import backendAPI from '../../api';
import { setAuthLoader, setUserAfterLoginAction } from '../../store/auth/auth';
import Button from '../components/Button';
import { ROUTES } from '../commons/routes';

export interface IDefaultLoginForm {
    username_email: string;
    password: string;
}

export default function DefaultLogin() {
    const [error401, setError401] = useState(null) 
    const [error, setError] = useState(null) 

    const dispatch = useDispatch()

    const initialValues: IDefaultLoginForm = {
        username_email: '',
        password: ''
    };

    const submitAction = async (values, { resetForm, setSubmitting }) => {
        setError401(null)
        setError(null)
        setSubmitting(true);
        dispatch(setAuthLoader(true))
       
        try {
            const user = await backendAPI.defaultLogin(values)

            resetForm();

            dispatch(setUserAfterLoginAction(user))
            dispatch(setAuthLoader(false))
        } catch (err) {
            dispatch(setAuthLoader(false))
            if(err.response.status === 401) {
                setError401(err.response.data.message || "Invalid credentials")
                return
            }
            setError(err.response.data.message);
        }

        setSubmitting(false);
    }

    const setErrorToNull = () => {
        setError401(null)
    }

    return (
        <div>
            {error401 || error  ? <div className="p-3 bg-red-50 text-red-700 mb-3">
                <div className="flex flex-row justify-between">
                    <button onClick={setErrorToNull} className="font-bold float-right">close</button>
                </div>
                {error && <span className="text-blue-900 py-3 block">{error}</span>}
                {error401 && <><span className="text-blue-900 py-3 block">{error401}</span>
                <Link className="text-blue-900 font-bold" to={ROUTES.RECOVER_PASSWORD}>Click here set or reset your password</Link></>}
            </div>: null }
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

                        <div className="flex justify-between">
                        <Button title="Login"/>
                        <Link className="text-blue-900 underline" to={ROUTES.RECOVER_PASSWORD}>Reset password</Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
