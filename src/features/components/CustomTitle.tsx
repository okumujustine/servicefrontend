import React from 'react'

export default function CustomTitle({title}:{title:string}) {
    return (
        <h5 className="text-3xl font-bold py-5">{title}</h5>
    )
}
