import React, { useState } from 'react'
import {
  Link,
} from "react-router-dom";
import { useSelector } from 'react-redux'

import { AuthState } from '../../store/auth/auth';
import { RootState } from '../../app/store';
import { ROUTES } from './routes';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const auth: AuthState = useSelector((state: RootState) => state.auth)

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <header>
      <div className="px-4 py-2 text-white flex  justify-between bg-blue-900">
        <div className="flex items-center">
          {auth.user?.email ? <h1>{auth.user?.email}</h1> : <h1 className="text-bold">TODO</h1>}
        </div>
        <div className={toggleMenu ? "md:flex  md:pt-0 pt-10 w-full md:w-auto" : "hidden md:flex"} id="menu">
          <ul>
            <Link to={ROUTES.LISTING} className="dropdown md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3 relative">
              Listings
            </Link>

            {!auth.loading ?
              <>
                {!auth.loggedIn && !auth.user ?
                  <>
                    <Link to={ROUTES.LOGIN} className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                      Login
                    </Link>
                    <Link to={ROUTES.REGISTER} className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                      Register
                    </Link>
                  </>
                  :
                  <>
                    <Link to={ROUTES.CREATE} className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                      Create
                    </Link>
                    <Link to={ROUTES.PROFILE} className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                      Profile
                    </Link>
                    <Link to={ROUTES.NOTIFICATION} className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
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