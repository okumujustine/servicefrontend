
import { useSelector } from 'react-redux'
import React from "react";
import { Transition } from "@headlessui/react";

import { AuthState } from '../../store/auth/auth';
import { RootState } from '../../app/store';
import { ROUTES } from './routes';
import { INotificationState } from '../../store/items/notifications';
import NavItem, { MobileNavItem, NotificationNavItem } from "./NavItem";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const auth: AuthState = useSelector((state: RootState) => state.auth)
  const notificationsState: INotificationState = useSelector((state: RootState) => state.notificationsState)

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div>
                {!auth.loggedIn ? <h5 className="text-white text-2xl font-bold">LOGO</h5> : 
                <small className="text-white"><i>welcome, </i>{auth?.user?.email}</small>}
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* first */}
                  {auth.loggedIn ? <>
                  <NavItem item="Listings" to={ROUTES.LISTING}/>
                  <NavItem item="Create" to={ROUTES.CREATE}/>
                  <NotificationNavItem  notification = {notificationsState?.notifications?.length} item="Notifications" to={ROUTES.NOTIFICATION}/>
                  <NavItem item="Profile" to={ROUTES.PROFILE}/>
                  </>:null}

                  {!auth.loggedIn ? <>
                  <NavItem item="Listings" to={ROUTES.LISTING}/>
                  <NavItem item="Login" to={ROUTES.LOGIN}/>
                  <NavItem item="Register" to={ROUTES.REGISTER}/>
                  </> : null}

                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {auth.loggedIn ? <>
                  <MobileNavItem item="Listings" to={ROUTES.LISTING}/>
                  <MobileNavItem item="Create" to={ROUTES.CREATE}/>

                  <NotificationNavItem  notification = {notificationsState?.notifications?.length} item="Notifications" to={ROUTES.NOTIFICATION}/>

                  <MobileNavItem item="Profile" to={ROUTES.PROFILE}/>
                  </>:null}

                  {!auth.loggedIn ? <>
                  <MobileNavItem item="Listings" to={ROUTES.LISTING}/>
                  <MobileNavItem item="Login" to={ROUTES.LOGIN}/>
                  <MobileNavItem item="Register" to={ROUTES.REGISTER}/>
                  </> : null}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;