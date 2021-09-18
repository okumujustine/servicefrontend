import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../app/store'
import { AuthState, onLogout } from '../../store/auth/auth'
import CustomTitle from '../components/CustomTitle'

function ProfileItemWrapper({ children, value }: { children: React.ReactNode, value: string }) {
    return <div className="border-blue-200 border rounded-md px-10 py-2 flex flex-row mb-5">
        <div>
            {children}
        </div>
        <span className="text-gray-600 pl-3">{value}</span>
    </div>
}

export default function Profile() {
    const dispatch = useDispatch()

    const auth: AuthState = useSelector((state: RootState) => state.auth)

    const onLogoutNow = () => {
        dispatch(onLogout())
    }

    return (
        <>
        <CustomTitle title="My Profile"/>
        {auth?.user ? <div>
            <ProfileItemWrapper value={auth?.user.username}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </ProfileItemWrapper>
            <ProfileItemWrapper value={auth?.user.email}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </ProfileItemWrapper>
        </div>: null}
        <button onClick={onLogoutNow} className="bg-red-400 text-white px-4 py-2 rounded-md shadow-md">logout</button>
        </>
    )
}
