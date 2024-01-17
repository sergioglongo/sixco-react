import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Outer from '../Templates/Outer';
import {
  LoginV2, RegisterV2,
  ResetPassword,
  RegisterFinish
} from '../pageListAsync';
import ResetPasswordCode from '../Pages/Users/ResetPasswordCode';

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
        <Route 
            exact
            path="/auth/registro-exitoso" 
            component={RegisterFinish} 
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
        <Route 
            path="/auth/reset-password-code" 
            component={ResetPasswordCode} 
          />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Outer>
  );
}

export default Auth;
