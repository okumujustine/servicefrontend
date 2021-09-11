import React from 'react'
import CustomGoogleLogin from './GoogleLogin'
import backendAPI from "../../api"
// import CustomFacebookLogin from './FacebookLogin';
import DefaultLogin from './DefaultLogin';


export default function Login() {

    const responseGoogle = async (responseGoogle) => {
        try {
            const api = await backendAPI.verifyGoogleToken(responseGoogle?.tokenId)
            console.log(api)
        } catch (e) {
            console.log("error verifying email address")
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
            <h2 className="text-3xl text-center text-gray-700 mb-4">Login Form</h2>
            <DefaultLogin />
            <CustomGoogleLogin responseGoogle={responseGoogle} />
            {/* <CustomFacebookLogin responseFacebook={responseFacebook}/> */}
        </div>
    )
}
