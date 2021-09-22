import React from 'react';

import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png'


export default function LinkedinLogin() {

    const handleSuccess = (data) => {
        console.log(data)
    }

    const handleFailure = (error) => {
        console.log(error)
    }

    return (
        <LinkedIn
        clientId={process.env.REACT_APP_LINKEDIN_CLIENT_ID}
        onFailure={handleFailure}
        onSuccess={handleSuccess}
        redirectUri={process.env.REACT_APP_LINKEDIN_LOGIN_CALL_BACK_URL}
    >
        <img src={linkedin} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
    </LinkedIn>
    )
}
