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

export function NotificationNavItem({item, to}) {
    return (
        <Link to={to} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            {item}
        </Link>
    )
}