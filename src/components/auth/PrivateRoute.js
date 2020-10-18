import React from 'react';
import T from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, ...props }) =>
  isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;

PrivateRoute.propTypes = {
  isLoggedIn: T.bool,
};

export default PrivateRoute;
