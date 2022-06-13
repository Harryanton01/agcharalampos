import React from 'react';
import { Switch, Route } from 'react-router';
 
export default (
    // Switch is added in v4 react-router
    <Switch>
        <Route  path="/home" />
            <Route path="/contact" />
            <Route  path="/news" />
            <Route  path="/photo" />
            <Route  path="/location" />
            <Route  path="/organization"/>
            <Route  path="/sign-up" />
            <Route  path="/numbers" />
            <Route  path="/success" />
            <Route  path="/websites" />
            <Route path="/"  />
    </Switch>
);