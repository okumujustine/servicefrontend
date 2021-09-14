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

export interface IDefaultLoginForm {
    username_email: string;
    password: string;
}

export default function DefaultLogin() {
    const [error401, setError401] = useState(null) 
    const dispatch = useDispatch()

    const initialValues: IDefaultLoginForm = {
        username_email: '',
        password: ''
    };

    const submitAction = async (values, { resetForm, setSubmitting }) => {
        setError401(null)
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
            console.log(err.response.data.message);
            // alert("Invalid credentials");
        }

        setSubmitting(false);
    }

    const setErrorToNull = () => {
        setError401(null)
    }

    return (
        <div>
            {error401 ? <div className="p-3 bg-red-50 text-red-700 mb-3">
                <div className="flex flex-row justify-between">
                    <div></div>
                    <button onClick={setErrorToNull} className="font-bold float-right">close</button>
                </div>
                <span className="text-blue-900 py-3 block">{error401}</span>
                <Link className="text-blue-900 font-bold" to="/reset-password">Click here set or reset your password</Link>
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

                        <Button title="Login"/>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
