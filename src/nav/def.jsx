import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingView from '../views/landing';
import Error404 from '../views/error-404';

export default function NavDef() {
    return (
        <Switch>
            <Route exact path="/" component={LandingView} />
            <Route component={Error404} />
        </Switch>
    );
}