import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Outer from '../Templates/Outer';
import {
  Login, LoginV2, LoginV3,
  Register, RegisterV2, RegisterV3,
  ResetPassword, LockScreen, ComingSoon,
  Maintenance,
  NotFound,
} from '../pageListAsync';

function Auth() {
  return (
    <Outer>
      <Switch>
      <Route
            exact
            path="/auth/login"
            component={LoginV2}
          />
        <Route 
            exact
            path="/auth/registrese" 
            component={RegisterV2} 
          />
        {/* <Route 
            exact
            path="/auth/gracias-por-registrarte" 
            component={RegisterFinished}
          /> */}
        <Route 
            path="/auth/reset-password" 
            component={ResetPassword} 
          />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Outer>
  );
}

export default Auth;
