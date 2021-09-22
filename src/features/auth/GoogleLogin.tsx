import React from 'react'
import { GoogleLogin } from 'react-google-login';

export default function CustomGoogleLogin({ responseGoogle }) {
    return (
        <div>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID!}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}
