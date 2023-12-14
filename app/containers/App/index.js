import React from 'react';
import { PropTypes } from 'prop-types';
import { Router, Switch, Route } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import Auth from './Auth';
import Application from './Application';
import LandingCorporate from './Landing';
import LandingCreative from './LandingCreative';
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import ArticleNews from './ArticleNews';
import ThemeWrapper from './ThemeWrapper';
import { useSelector } from 'react-redux';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App(props) {
  const { history } = props;
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);

  return (
    <ThemeWrapper>
      <Router history={history}>
      <Switch>
        <PublicRoute
          exact
          isAuthenticated={isAuthenticated}
          path="/"
          component={LandingCorporate}
        />
        <PublicRoute
          exact
          isAuthenticated={isAuthenticated}
          path="/landing-creative"
          component={LandingCreative}
        />
        <PublicRoute
          path="/auth"
          isAuthenticated={isAuthenticated}
          component={Auth}
        />

        <PrivateRoute
          // exact
          isAuthenticated={isAuthenticated}
          path="/app"
          component={Application}
        />

        <Route component={NotFound} />
      </Switch>
      </Router>
    </ThemeWrapper>
  );
}

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
