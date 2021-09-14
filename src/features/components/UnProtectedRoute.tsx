import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'

import { RootState } from "../../app/store";
import { AuthState } from "../../store/auth/auth";


const UnProtectedRoute = (props) => {
const { redirectPath, component, ...routeProps} = props;

  const auth: AuthState = useSelector((state: RootState) => state.auth)
  const Component = component;
  const isAccessible = Boolean(!auth?.user) && !auth?.loggedIn;

  return (
    <Route
      {...routeProps}
      render={props => {
        if (isAccessible) return <Component {...props} />;
        return <Redirect to={{ pathname: redirectPath || "/" }} />;
      }}
    />
  );
};

export default UnProtectedRoute