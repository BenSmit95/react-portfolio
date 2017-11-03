import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LandingPage from '../components/LandingPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={LandingPage} exact={true} />
        </Switch>
    </Router>
);

export default AppRouter;