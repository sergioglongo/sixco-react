import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, isAuthenticated, ...children }) {
    if (isAuthenticated === true) {
      return <Route {...children} render={props => <Component {...props} />} />;
    }
    return <Redirect to="/auth/login" />;
}

export default PrivateRoute;