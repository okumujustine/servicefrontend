import React, { useState } from 'react'
import {
  Link,
} from "react-router-dom";

import { useSelector } from 'react-redux'
import { AuthState } from '../../store/auth/auth';
import { RootState } from '../../app/store';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const auth: AuthState = useSelector((state: RootState) => state.auth)

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <header>
      <div className="px-4 py-2 text-white flex  justify-between bg-blue-900">
        {auth.user?.email ? <h1>{auth.user?.email}</h1> : <h1 className="text-bold">TODO</h1>}
        <div className={toggleMenu ? "md:flex  md:pt-0 pt-10 w-full md:w-auto" : "hidden md:flex"} id="menu">
          <ul>
            <Link to="/" className="dropdown md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3 relative">
              Listings
            </Link>
            <Link to="/create" className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
              Create
            </Link>

            {!auth.loading ?
              <>
                {!auth.loggedIn && !auth.user ?
                  <>
                    <Link to="/login" className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                      Login
                    </Link>
                    <Link to="/register" className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                      Register
                    </Link>
                  </>
                  :
                  <>
                    <Link to="/profile" className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                      Profile
                    </Link>
                    <Link to="/notification" className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                      Notifications
                    </Link>
                  </>
                }
              </>
              :
              <>
                <div className="md:inline-block text-blue-900 cursor-pointer border-b md:border-none py-2 px-3">
                  Login
                </div>
                <div className="md:inline-block text-blue-900 cursor-pointer border-b md:border-none py-2 px-3">
                  Register
                </div>
              </>
            }


          </ul>
        </div>
        <div className="cursor-pointer md:hidden">
          <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
            <span onClick={handleToggle} className="navicon bg-white-darkest flex items-center relative"></span>
          </label>
        </div>
      </div>
    </header>
  )
};

export default NavBar;