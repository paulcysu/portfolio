import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from 'components/common/Navigation/Navigation';
import Footer from 'components/common/Footer/Footer';
import AboutMe from 'components/AboutMe/AboutMe';
import Resume from 'components/Resume/Resume';

const App = () => (
    <>
    <Navigation/>
    <Switch>
        <Route path="/" exact component={AboutMe}/>
        <Route path="/resume" component={Resume}/>
    </Switch>
    <Footer/>
    </>
);

export default App;