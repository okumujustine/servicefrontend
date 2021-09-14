import React from 'react'
import { useDispatch } from 'react-redux'

import CustomGoogleLogin from './GoogleLogin'
import backendAPI from "../../api"
import DefaultLogin from './DefaultLogin';
import CustomTitle from '../components/CustomTitle';
import { setAuthLoader, setUserAfterLoginAction } from '../../store/auth/auth';


export default function Login() {

    const dispatch = useDispatch()

    const responseGoogle = async (responseGoogle) => {
        dispatch(setAuthLoader(true))
        try {
            const user = await backendAPI.verifyGoogleToken(responseGoogle?.tokenId)

            dispatch(setUserAfterLoginAction(user))
            dispatch(setAuthLoader(false))
        } catch (e) {
            alert("error verifying email address")
            dispatch(setAuthLoader(false))
        }
    }

    // const responseFacebook = async (responseFacebook) =>{
    //     const {userId, accessToken} = responseFacebook
    //     try{
    //         const api = await backendAPI.verifyFacebookToken(userId, accessToken)
    //         console.log(api)
    //     }catch(e){
    //         console.log("error verifying facebook account")
    //     }
    // }

    return (
        <div>
            <CustomTitle title="Login Here"/>
            <DefaultLogin />
            <CustomGoogleLogin responseGoogle={responseGoogle} />
            {/* <CustomFacebookLogin responseFacebook={responseFacebook}/> */}
        </div>
    )
}
