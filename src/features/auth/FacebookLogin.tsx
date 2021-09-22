import React from 'react'
import FacebookLogin from 'react-facebook-login';

export default function CustomFacebookLogin({responseFacebook}) {
    return (
        <div>
           <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                autoLoad={false}
                fields="name,email"
                callback={responseFacebook} 
            />
        </div>
    )
}
