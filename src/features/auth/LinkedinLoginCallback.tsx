import { useState } from 'react';
import { useLocation } from 'react-router'
import queryString from 'query-string';
import {
    Link,
    useHistory
  } from "react-router-dom";
  import { useDispatch } from 'react-redux'

import backendAPI from '../../api';
import { ROUTES } from '../commons/routes';
import { setUserAfterLoginAction } from '../../store/auth/auth';

export default function LinkedinLoginCallback() {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    
    const location = useLocation();
    let history = useHistory();
    const dispatch = useDispatch()

    const confirmLinkedInLogin = async () => {
        setError(null)
        setLoading(true)
        
        const parsedUrl = queryString.parse(location.search);
        const code = parsedUrl?.code as unknown as string

        try{
            const user = await backendAPI.linkedinLogin(code)
  
            console.log("user", user)
            setTimeout(() => {
                setError(null)
                setLoading(false)
                history.push(ROUTES.LISTING);
                dispatch(setUserAfterLoginAction(user))
            }, 2000)
        }catch(err){
            setTimeout(() => {
                setLoading(false)
                setError(err.response ? err.response.data.message : "Failed to login, try again later" )
            }, 2000)
        }
    }

    return (
        <div>
            {loading ? <h5 className="pb-2">Logging in with LinkedIn wait ...</h5>: null}

            {error ? <div className="border border-red-600 bg-red-50 py-2 my-2 px-3 rounded-md">
                <p className="py-1">{error}</p>
                <Link className="underline text-blue-400" to={ROUTES.LOGIN}>Go to login page</Link>
            </div>: null}

            <button className="mt-2 text-white bg-blue-800 py-1 px-2 rounded-md" onClick={confirmLinkedInLogin}>Confirm LinkedIn Login</button>
        </div>
    )
}
