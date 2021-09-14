import React from 'react'


interface IButtonType {
    buttonType?:"submit" | "button" | "reset" | undefined;
    title:string;
}

export default function Button({buttonType="submit", title}:IButtonType) {
    return (
        <button className="bg-blue-900 px-3 py-2 text-white rounded-lg" type={buttonType}>{title}</button>
    )
}
