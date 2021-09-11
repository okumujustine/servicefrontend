import React from 'react'
import FacebookLogin from 'react-facebook-login';

export default function CustomFacebookLogin({responseFacebook}) {
    return (
        <div>
           <FacebookLogin
                appId="4180054262113920"
                autoLoad={false}
                fields="name,email"
                callback={responseFacebook} 
            />
        </div>
    )
}
