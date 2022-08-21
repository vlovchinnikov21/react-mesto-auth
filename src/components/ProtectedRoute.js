import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {props.loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
      {() => {
        props.loggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />;
      }}
    </Route>
  );
};

export default ProtectedRoute;
