import React from 'react'
import { GoogleLogin } from 'react-google-login';

const clientId = "589244231490-bg8nhg0hlrgvnki7lp2ebpq32ugm2ve0.apps.googleusercontent.com"

export default function CustomGoogleLogin({ responseGoogle }) {
    return (
        <div>
              <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}
