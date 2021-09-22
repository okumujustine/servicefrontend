import React from 'react'

interface ISocialLoginWrapper{
    children: React.ReactNode
}

export default function SocialLoginWrapper({children}:ISocialLoginWrapper) {
    return (
        <div className="mb-2">
            {children}
        </div>
    )
}
