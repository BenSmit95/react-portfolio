import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ContactPage from '../components/ContactPage';
import IntroductionPage from '../components/IntroductionPage';
import LandingPage from '../components/LandingPage';
import MainRoute from '../routers/MainRoute';
import ProjectsPage from '../components/ProjectsPage';
import SkillsPage from '../components/SkillsPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={LandingPage} exact={true} />
            <MainRoute path="/introduction" component={IntroductionPage} />
            <MainRoute path="/skills" component={SkillsPage} />
            <MainRoute path="/projects" component={ProjectsPage} />
            <MainRoute path="/contact" component={ContactPage} />
        </Switch>
    </Router>
);

export default AppRouter;