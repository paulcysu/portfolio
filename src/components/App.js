import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from 'components/AboutMe/AboutMe';
import Navigation from 'components/common/Navigation/Navigation';
import Footer from 'components/common/Footer/Footer';

const App = () => (
    <>
    <Navigation/>
    <Switch>
        <Route path="/" exact component={AboutMe}/>
        <Route component={AboutMe}/>
    </Switch>
    <Footer/>
    </>
);

export default App;