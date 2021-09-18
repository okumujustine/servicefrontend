import React from 'react'


interface IButtonType {
    buttonType?:"submit" | "button" | "reset" | undefined;
    title:string;
    loading?:boolean;
}

export default function Button({buttonType="submit", title, loading=false}:IButtonType) {
    return (
        <button className={!loading ? "bg-blue-900 px-3 py-2 text-white rounded-lg mb-3":"bg-gray-200 border-2 border-gray-800 text-gray-800 px-3 py-2 rounded-lg mb-3 cursor-wait"} type={buttonType}
        disabled={loading}>
            {!loading ?  <span>{title}</span> : <span>loading ...</span> }
        </button>
    )
}
