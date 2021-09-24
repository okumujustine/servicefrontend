import React from 'react'
import {
    Link,
    useLocation
  } from "react-router-dom";
  import classNames from "classnames";

export default function NavItem({item, to}) {

    const location = useLocation();
    
    return (
        <Link to={to} className={classNames("text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium", {"bg-gray-700":to === location.pathname })}>
            {item}
        </Link>
    )
}

export function MobileNavItem({item, to}) {
    const location = useLocation();
    return (
        <Link to={to} className={classNames("hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium", {"bg-gray-700":to === location.pathname })}>
            {item}
        </Link>
    )
}

export function NotificationNavItem({item, to, notification}) {
    const location = useLocation();

    return (
        <Link to={to} className={classNames("text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex", {"bg-gray-700":to === location.pathname })}>
            {notification !== 0 ? <div className="rounded-full bg-red-600 mr-2"><small className="text-white py-1 px-2">{notification}</small></div>:null}<span>{item}</span>
        </Link>
    )
}