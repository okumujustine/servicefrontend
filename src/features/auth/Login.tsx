import React from 'react'
import { useDispatch } from 'react-redux'
import {  toast } from 'react-toastify';

import CustomGoogleLogin from './GoogleLogin'
import backendAPI from "../../api"
import DefaultLogin from './DefaultLogin';
import CustomTitle from '../components/CustomTitle';
import { setAuthLoader, setUserAfterLoginAction } from '../../store/auth/auth';
import LinkedinLogin from "./LinkedinLogin"
import CustomFacebookLogin from './FacebookLogin';
import SocialLoginWrapper from './components/SocialLoginWrapper';


export default function Login() {

    const dispatch = useDispatch()

    const responseGoogle = async (responseGoogle) => {
        dispatch(setAuthLoader(true))
        try {
            const user = await backendAPI.verifyGoogleToken(responseGoogle?.tokenId)

            dispatch(setUserAfterLoginAction(user))
            dispatch(setAuthLoader(false))
        } catch (error) {
            toast.error(error.response ? error.response.data.message : "Error verifying email address")
            dispatch(setAuthLoader(false))
        }
    }

    const responseFacebook = async (responseFacebook) => {
        const { userId, accessToken } = responseFacebook
        console.log("{userId, accessToken}", { userId, accessToken })
        // try{
        //     const api = await backendAPI.verifyFacebookToken(userId, accessToken)
        //     console.log(api)
        // }catch(e){
        //     console.log("error verifying facebook account")
        // }

    }

    return (
        <div>
            <CustomTitle title="Login Here" />

            <DefaultLogin />

            <div className="mt-1 mb-3">
                <h5 className="text-gray-500 py-2">Social Logins</h5>
                <hr/>
            </div>

            <SocialLoginWrapper>
                <CustomGoogleLogin responseGoogle={responseGoogle} />
            </SocialLoginWrapper>

            <SocialLoginWrapper>
                <CustomFacebookLogin responseFacebook={responseFacebook} />
            </SocialLoginWrapper>

            <SocialLoginWrapper>
                <LinkedinLogin />
            </SocialLoginWrapper>
        </div>
    )
}
