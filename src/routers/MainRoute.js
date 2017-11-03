import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';

// This is the route component I use for pages with a header
const MainRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        <div>
            <Header />
            <Component {...props} />
        </div>
    )}/>
);

export default MainRoute;