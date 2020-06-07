import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from 'components/AboutMe/AboutMe.js';
import Navigation from './common/Navigation/Navigation';

const App = () => (
    <>
    <Navigation/>
    <Switch>
        <Route path="/" exact component={AboutMe}/>
        <Route component={AboutMe}/>
    </Switch>
    </>
);

export default App;