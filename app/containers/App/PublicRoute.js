import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
function PublicRoute({ component: Component, isAuthenticated, ...children }) {
    return (
      <Route
        render={props =>
          //bloqueo el acceso a la landing
          isAuthenticated || children.path === '/' ? (
            <Redirect to="/app" />
          ) : (
            <Component {...props} {...children} />
          )
        }
      />
    );
}
  
export default PublicRoute;