import React,{useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import NavBar from './features/commons/NavBar';
import NavigationRoutes from './features/commons/NavigationRoutes';
import { useDispatch } from 'react-redux'
import { checkLoggedIn } from './store/auth/auth';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkLoggedIn())
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <NavBar />
      <Switch>
        <NavigationRoutes/>
      </Switch>
    </Router>
  );
}

export default App;
