import React,{useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import NavBar from './features/commons/NavBar';
import NavigationRoutes from './features/commons/NavigationRoutes';
import { useDispatch } from 'react-redux'
import { checkLoggedIn } from './store/auth/auth';
import { loadNotifications } from './store/items/notifications';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    loadUserAndNotifications()
    // eslint-disable-next-line
  }, [])

  const loadUserAndNotifications = async () => {
    await dispatch(checkLoggedIn())
    await dispatch(loadNotifications())
  }

  return (
    <Router>
      <NavBar />
      <ToastContainer />
      <div className="mt-4 w-9/12 md:mt-8 md:w-6/12 mx-auto">
        <Switch>
          <NavigationRoutes/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
