import React from 'react'
import {
    Link,
  } from "react-router-dom";

export default function NavItem({item, to}) {
    return (
        <Link to={to} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            {item}
        </Link>
    )
}

export function MobileNavItem({item, to}) {
    return (
        <Link to={to} className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
            {item}
        </Link>
    )
}

export function NotificationNavItem({item, to, notification}) {
    return (
        <Link to={to} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex">
            {notification !== 0 ? <div className="rounded-full bg-red-600 mr-2"><small className="text-white py-1 px-2">{notification}</small></div>:null}<span>{item}</span>
        </Link>
    )
}