import React from 'react';
import T from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isLogged, ...props }) =>
  isLogged ? <Route {...props} /> : <Redirect to="/login" />;

PrivateRoute.propTypes = {
  isLogged: T.bool,
};

export default PrivateRoute;
